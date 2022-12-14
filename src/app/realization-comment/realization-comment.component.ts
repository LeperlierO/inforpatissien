import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/comment'

@Component({
  selector: 'app-realization-comment',
  templateUrl: './realization-comment.component.html',
  styleUrls: ['./realization-comment.component.css']
})
export class RealizationCommentComponent implements OnInit {

  @Input() comment!: Comment;

  constructor() { }

  ngOnInit(): void {
    console.log(this.comment);
  }

}
