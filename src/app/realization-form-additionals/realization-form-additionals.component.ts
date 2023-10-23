import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { toast } from 'bulma-toast';
import { Observable, Subscription } from 'rxjs';
import { BodyId } from '../models/common';
import { BodyRealization, BodyRealizationAdditionals, MiniRealization, Realization } from '../models/realization';
import { RealizationService } from '../services/realization.service';


@Component({
  selector: 'app-realization-form-additionals',
  templateUrl: './realization-form-additionals.component.html',
  styleUrls: ['./realization-form-additionals.component.css']
})
export class RealizationFormAdditionalsComponent implements OnInit {
  
  @Output() closeEvent = new EventEmitter<boolean>(); // Permet de mettre à jour la liste des réalisations quand la modal est fermée : event envoyé au parent
  
  private showSubscription: Subscription = new Subscription(); 
  @Input() show!: Observable<MiniRealization>; // Permet de savoir quand la modal est ouverte alors il faut ré initialiser les champs du form
  @Input() id: number = -1;

  // Permet de gérer les erreurs de champs obligatoires
  realizationForm: FormGroup | any;
  source = new FormControl('');
  notes = new FormControl('');

  loading: boolean = false;

  constructor(private realizationService: RealizationService, private formBuilder: FormBuilder) 
  { 
    this.initForm() 
  }

  ngOnInit(): void {
    this.realizationService.getRealization(this.id)
    .subscribe({
      next: (response) => {
        this.realizationForm.controls['source'].setValue(response.source);
        this.realizationForm.controls['notes'].setValue(response.notes);
    }});

    this.showSubscription = this.show.subscribe((realization : MiniRealization) => 
    {
      this.initForm();
      this.loading = false;
    });
  }
  
  ngOnDestroy() {
    this.showSubscription.unsubscribe();
  }

  initForm(){
    this.realizationForm = this.formBuilder.group({
      source: this.source,
      notes : this.notes,
    })
  }

  onSubmitForm(){
    if(!this.loading){
      this.loading = true;

      const formValue = this.realizationForm?.value;
      const realization = new BodyRealizationAdditionals();

      realization.id = this.id;
      realization.source = formValue['source'];
      realization.notes = formValue['notes'];
  
      console.log(realization);

      this.realizationService.setRealizationAdditionals(realization).subscribe(() => this.closeModal());
    }
  }

  closeModal(){
    this.closeEvent.emit(false);
  }

}
