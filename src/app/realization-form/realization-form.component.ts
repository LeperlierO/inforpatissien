import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { toast } from 'bulma-toast';
import { Observable, Subscription } from 'rxjs';
import { BodyRealization, Realization } from '../models/realization';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-realization-form',
  templateUrl: './realization-form.component.html',
  styleUrls: ['./realization-form.component.css']
})
export class RealizationFormComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<boolean>(); // Permet de mettre à jour la liste des réalisations quand la modal est fermée : event envoyé au parent
  
  private showSubscription: Subscription = new Subscription(); 
  @Input() show!: Observable<void>; // Permet de savoir quand la modal est ouverte alors il faut ré initialiser les champs du form

  // Permet de gérer les erreurs de champs obligatoires
  realizationForm: FormGroup | any;
  name = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  description = new FormControl('',); 
  date = new FormControl(new Date().toISOString().slice(0, 10), [Validators.required]);
  success = new FormControl('1', [Validators.required]);
  difficulty = new FormControl('0', [Validators.required]);
  fileName = new FormControl('', [Validators.required]);

  file!: File;
  loading: boolean = false;

  constructor(private realizationService: RealizationService, private formBuilder: FormBuilder) { this.initForm(); }

  ngOnInit(): void {
    this.showSubscription = this.show.subscribe(() => 
      {
        this.initForm();
        this.loading = false;
      }
    );
  }

  ngOnDestroy() {
    this.showSubscription.unsubscribe();
  }

  initForm(){
    this.realizationForm = this.formBuilder.group({
      name: this.name,
      code : this.code,
      description : this.description,
      date : this.date,
      success : this.success,
      difficulty : this.difficulty,
      fileName : this.fileName
    })
  }

  getRealizationNameError() {
    return this.name.hasError('required') ? "Le nom est obligatoire" : "";
  }

  getRealizationCodeError() {
    return this.code.hasError('required') ? "Le code est obligatoire" : "";
  }

  getRealizationDateError() {
    return this.date.hasError('required') ? "La date est obligatoire" : "";
  }

  getRealizationFileError() {
    return this.fileName.hasError('required') ? "Le fichier est obligatoire" : "";
  }

  onSubmitForm(){
    if(!this.loading){
      this.loading = true;

      const formValue = this.realizationForm?.value;
      const realization = new BodyRealization();
      const image = formValue['fileName'].replace(/\s/g, "_");

      realization.name = formValue['name'];
      realization.code = formValue['code'];
      realization.description = formValue['description'];
      realization.date = formValue['date'];
      realization.success = formValue['success'];
      realization.mainPhoto = '';
  
      this.realizationService.uploadFile(this.file, realization.code, image).subscribe(
        (response: any) => {
          realization.mainPhoto = response.link;
          this.realizationService.createRealization(realization).subscribe(
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
      let errorMessage = "";

      if(fileList[0].type != "image/jpeg" && fileList[0].type != "image/png") {
        errorMessage = "Le fichier doit être une image de type jpeg ou png";
      }else if(fileList[0].size > 800000 ){
        errorMessage = "Le taille du fichier ne doit pas excéder 800 Ko";
      }

      if(errorMessage == ""){
        this.fileName.setValue(fileList[0].name);
        this.file = fileList[0];
      }else{
        toast({ message: errorMessage, type: 'is-danger', position:'top-center' });
        this.fileName.setValue("");
      }
    }
  }

  closeModal(){
    this.closeEvent.emit(false);
  }

}
