import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Note } from '../note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: Note;
  id: number;

  constructor(private noteService: NoteService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.note = this.noteService.getNote(this.id);
        }
      );
  }

  onAddToActionList() {
    this.noteService.addActionsToActionList(this.note.actions);
  }

  onEditNote() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteNote() {
    this.noteService.deleteNote(this.id);
    this.router.navigate(['/notes']);
  }

}
