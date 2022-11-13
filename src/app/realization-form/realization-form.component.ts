import { Component, OnInit } from '@angular/core';
import { BodyRealization, Realization } from '../models/realization';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-realization-form',
  templateUrl: './realization-form.component.html',
  styleUrls: ['./realization-form.component.css']
})
export class RealizationFormComponent implements OnInit {

  body: BodyRealization = new BodyRealization;
  name = '';
  code = '';
  description = '';
  date : Date = new Date();
  succes : number = 0;
  difficulty : number = 0;
  fileName = '';
  file!: File;
  id: number = -1;

  constructor(private realizationService: RealizationService) { }

  ngOnInit(): void {
  }

  addRealization(){
    this.body.name = this.name;
    this.body.code = this.code;
    this.body.description = this.description;
    this.body.date = this.date;
    this.body.success = this.succes;
    this.body.difficulty = this.difficulty;
    this.body.mainPhoto = '';

    this.realizationService.uploadFile(this.file, "olivier", this.code, this.fileName).subscribe(
      (url: string) => {
        this.body.mainPhoto = url;
        this.realizationService.createRealization(this.body).subscribe(
          (realization: any) => {
            console.log(realization);
            this.id = realization.id;
          }
        );
      }
    );
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
      this.fileName = fileList[0].name;
      this.file = fileList[0];
    }
}

}
