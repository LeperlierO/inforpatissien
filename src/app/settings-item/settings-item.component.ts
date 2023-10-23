import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiniRealization } from '../models/realization';
import { toast } from 'bulma-toast';
import { RealizationService } from '../services/realization.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-settings-item',
  templateUrl: './settings-item.component.html',
  styleUrls: ['./settings-item.component.css']
})
export class SettingsItemComponent implements OnInit {

  @Output() deleteEvent = new EventEmitter<void>();
  @Input() realization!: MiniRealization;

  photosModalIsActive = false;

  editModalIsActive = false;
  showSubject: Subject<MiniRealization> = new Subject<MiniRealization>();
  
  constructor(private realizationService: RealizationService) { }

  ngOnInit(): void {
  }

  edit(){
    this.editModalIsActive = true;
    this.showSubject.next(this.realization);
  }

  editAdditionals(){
    alert('edit additionals');
  }

  displayPhotosModal(active: boolean){
    this.photosModalIsActive = active;
  }

  delete(){
    this.realizationService.deleteRealization(this.realization.id).subscribe({
      next: () => {
        this.deleteEvent.emit();
      }
    });
  }

}
