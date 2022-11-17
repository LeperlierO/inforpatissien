import { Component, OnInit } from '@angular/core';
import { MiniRealization } from '../models/realization';
import { AuthService } from '../services/auth.service';
import { RealizationService } from '../services/realization.service';
import { toast } from 'bulma-toast';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  showSubject: Subject<void> = new Subject<void>();
  realizations!: MiniRealization[];
  error: any;

  modalIsActive!: boolean;

  constructor(private realizationService: RealizationService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.tokenValue) this.router.navigate(['/']);
    this.getMiniRealizations();
  }

  getMiniRealizations(){
    this.realizationService.getMiniRealizations()
    .subscribe({
      next: (response) => {
        this.realizations = response;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }

  displayModal(active: boolean){
    this.modalIsActive = active;
    if(!active)
    {
      this.getMiniRealizations();
    }
    else
    {
      this.showSubject.next();
    }
  }

  reloadRealizations(){
    this.getMiniRealizations();
  }


}
