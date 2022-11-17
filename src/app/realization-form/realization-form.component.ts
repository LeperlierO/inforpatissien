import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BodyRealization, Realization } from '../models/realization';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-realization-form',
  templateUrl: './realization-form.component.html',
  styleUrls: ['./realization-form.component.css']
})
export class RealizationFormComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<boolean>();
  private showSubscription: Subscription = new Subscription();
  @Input() show!: Observable<void>;

  body: BodyRealization = new BodyRealization();
  fileName = '';
  file!: File;
  loading: boolean = false;

  constructor(private realizationService: RealizationService) { }

  ngOnInit(): void {
    this.showSubscription = this.show.subscribe(() => 
      {
        this.body = new BodyRealization();
        this.body.date = new Date().toISOString().slice(0, 10);
        this.body.success = 0;
        this.body.difficulty = 0;
      }
    );
  }

  ngOnDestroy() {
    this.showSubscription.unsubscribe();
  }

  addRealization(){
    if(!this.loading){
      this.loading = true;
      this.body.mainPhoto = '';

      this.fileName = this.fileName.replace(/\s/g, "_");
  
      this.realizationService.uploadFile(this.file, this.body.code, this.fileName).subscribe(
        (url: string) => {
          this.body.mainPhoto = url;
          this.realizationService.createRealization(this.body).subscribe(
            (realization: Realization) => {
              this.closeEvent.emit(false);
            }
          );
        }
      );
    }
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      // console.log("FileUpload -> files", fileList);
      this.fileName = fileList[0].name;
      this.file = fileList[0];
    }
  }

  closeModal(){
    this.closeEvent.emit(false);
  }

}
