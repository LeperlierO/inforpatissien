import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiniRealization } from '../models/realization';
import { toast } from 'bulma-toast';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-settings-item',
  templateUrl: './settings-item.component.html',
  styleUrls: ['./settings-item.component.css']
})
export class SettingsItemComponent implements OnInit {

  @Output() deleteEvent = new EventEmitter<void>();
  @Input() realization!: MiniRealization;
  
  constructor(private realizationService: RealizationService) { }

  ngOnInit(): void {
  }

  edit(){
    toast({ message: "edit " + this.realization.name, type: 'is-success', position:'top-center' });
  }

  delete(){
    this.realizationService.deleteRealization(this.realization.id).subscribe({
      next: () => {
        this.deleteEvent.emit();
      }
    });
  }

}
