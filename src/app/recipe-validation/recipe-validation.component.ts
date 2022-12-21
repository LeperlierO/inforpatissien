import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe';
import { toast } from 'bulma-toast';
import { RealizationService } from '../services/realization.service';
import { Router } from '@angular/router';
import { BodyRealization, Realization } from '../models/realization';
import { BodyId } from '../models/common';
import { Token, User } from '../models/auth';
import { AuthService } from '../services/auth.service';
import { Time } from "@angular/common";

@Component({
  selector: 'app-recipe-validation',
  templateUrl: './recipe-validation.component.html',
  styleUrls: ['./recipe-validation.component.css']
})
export class RecipeValidationComponent implements OnInit {

  token: Token | null = null;
  podium: User[] = [];
  
  activeStep: number = 1;
  recipePropositions = [{name: 'Bûche trois chocolat', description: 'Blanc, lait, noir'},
                        {name: 'Bûche chocolat blanc', description: 'Fève de tonka, caramel beure salé'},
                        {name: 'Bûche vanille', description: 'Speculos, caramel'},
                        {name: 'Bûche chocolat noir', description: 'Beurre de cacahuète, coco'}]
  selectedProposition = {name: '', description: ''};
  @Output() closeEvent = new EventEmitter<boolean>();
  @Input() recipe!: Recipe;

  fileName!: string;
  file!: File;
  photoUrl: string = 'https://inforpatissien-api.azurewebsites.net/assets/images/admin/loader.gif';
  photoSuccess: boolean = false;

  constructor(private realizationService: RealizationService,private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.tokenSubject.subscribe(
      (token : Token | null) => {
        this.token = token;
      }
    )

    this.recipePropositions.splice(3, 0, {name: this.recipe.name, description: this.recipe.description});
  }

  closeModal(){
    this.closeEvent.emit();
  }

  nextStep(){
    let authorize = true;
    let error = "";

    if(this.activeStep == 2){
      authorize = this.selectedProposition.name == this.recipe.name && this.selectedProposition.description == this.recipe.description;
      if(!authorize) error = "Le nom de recette selectionné n'est pas le bon"
    }
    else if(this.activeStep == 3){
      authorize = this.photoSuccess;
      if(!authorize){
        error = "Veuillez sélectionner une photo"
      }
      else{
        authorize = false;
        this.authService.setUserPodim()
        .subscribe({
          next: () => {
            this.authService.getPodim()
              .subscribe({
                next: (response) => {
                  this.podium = response;
                  this.activeStep += 1;
                }
              })
          }
        })

        
      }
    }

    if(authorize && this.activeStep < 5) this.activeStep += 1;
    else if(error.length > 0) toast({ message: error, type: 'is-danger', position:'top-center' });
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

  createRealization(){

    let d = new Date();
    if(this.token != undefined && this.token != null) d = new Date(this.token.connection);

    var time = this.token?.connection != undefined ? new Date().getTime() - d.getTime() : 0;
    const realization = new BodyRealization();

    realization.name = this.recipe.name;
    realization.code = this.recipe.code;
    realization.description = this.recipe.description;
    realization.date = new Date().toDateString();
    realization.success = new BodyId();
    realization.success.id = 2;
    realization.mainPhoto = this.photoUrl;
    // realization.time = { hours:0, minutes: time/60000}; // NOT INITIALIZE TIME IN REALIZATION

    this.realizationService.createRealization(realization).subscribe(
      (realization: Realization) => {
        this.router.navigate(["/realisations/" + realization.id]);
      }
    );
  }

}
