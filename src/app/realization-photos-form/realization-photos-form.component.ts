import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toast } from 'bulma-toast';
import { RealizationService } from '../services/realization.service';
import { MiniRealization, Realization } from '../models/realization';

@Component({
  selector: 'app-realization-photos-form',
  templateUrl: './realization-photos-form.component.html',
  styleUrls: ['./realization-photos-form.component.css']
})
export class RealizationPhotosFormComponent implements OnInit {

  @Output() closeEvent = new EventEmitter();
  @Input() miniRealization!: MiniRealization;
  realization!: Realization;

  loading = [false, false, false]
  defaultUrl = "https://inforpatissien-api.azurewebsites.net/assets/images/admin/loader.gif";

  constructor(private realizationService: RealizationService) { }

  ngOnInit(): void {
    this.realizationService.getRealization(this.miniRealization.id)
    .subscribe((response) => this.realization = response);
  }

  closeModal(){
    this.closeEvent.emit();
  }

  upsertPhoto(event: Event, number: number) {
    this.loading[number-1] = true;
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      // upload file in api
      this.realizationService.upsertPhoto(fileList[0], this.realization.code, fileList[0].name, this.realization.id, false, number).subscribe(
        (response: any) => {
          this.realization = response;
          this.loading[number-1] = false;
        }
      );
    }
  }

}
