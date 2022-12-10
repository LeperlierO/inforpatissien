import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe';
import { toast } from 'bulma-toast';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-recipe-validation',
  templateUrl: './recipe-validation.component.html',
  styleUrls: ['./recipe-validation.component.css']
})
export class RecipeValidationComponent implements OnInit {

  activeStep: number = 1;
  namePropositions = ['Bûche de Noël', 'Bûche chocolat blanc et beurre de cacahuète', 'Gâteau blanc', 'Bûche caramel beurre salé', 'Bûche coco', 'Gâteau de Paques', 'Bûche vanille caramel noix de pécan']
  selectedProposition: string = "";
  @Output() closeEvent = new EventEmitter<boolean>();
  @Input() recipe!: Recipe;

  fileName!: string;
  file!: File;
  photoUrl: string = 'https://inforpatissien-api.azurewebsites.net/assets/images/admin/loader.gif';
  photoSuccess: boolean = false;

  constructor(private realizationService: RealizationService) { }

  ngOnInit(): void {
    this.namePropositions.push(this.recipe.name);
  }

  closeModal(){
    this.closeEvent.emit();
  }

  nextStep(){
    let authorize = true;
    let error = "";

    // REMOVE COMMENT
    /*if(this.activeStep == 2){
      authorize = this.selectedProposition == this.recipe.name;
      if(!authorize) error = "Le nom de recette selectionné n'est pas le bon"
    }
    else if(this.activeStep == 3){
      authorize = this.photoSuccess;
      if(!authorize) error = "Veuillez sélectionner une photo"
    }*/

    if(authorize && this.activeStep < 5) this.activeStep += 1;
    else toast({ message: error, type: 'is-danger', position:'top-center' });
  }

  previousStep(){
    if(this.activeStep > 1) this.activeStep -= 1;
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      let errorMessage = "";

      if(errorMessage == ""){
        this.fileName = fileList[0].name.replace(/\s/g, "_");;
        this.file = fileList[0];

        // upload file in api
        this.realizationService.uploadFile(this.file, this.recipe.code, this.fileName).subscribe(
          (response: any) => {
            this.photoUrl = response.link;
            this.photoSuccess = true;
          }
        );

      }else{
        toast({ message: errorMessage, type: 'is-danger', position:'top-center' });
        this.fileName = '';
      }
    }
  }

}
