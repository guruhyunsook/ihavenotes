import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Note } from './note.model';
import { Action } from '../shared/action.model';
import { ActionListService } from '../action-list/action-list.service';

@Injectable()
export class NoteService {
  notesChanged = new Subject<Note[]>();

  private notes: Note[] = [
    new Note(
      'Diet Plan',
      'Lets lose some weight for this summer!',
      '/assets/diet.jpg',
      [
        new Action('Food Diet', 5),
        new Action('Exercise Activity', 20)
      ]),
    new Note('Vacation Plan',
      'Summer vacation is coming!, exciting',
      '/assets/vacation.jpg',
      [
        new Action('Hotel Booking', 5),
        new Action('Airplan Booking', 7),
        new Action('Shopping Clothes', 7)
      ])
  ];

  constructor(private slService: ActionListService) {}

  setNotes(notes: Note[]) {
    this.notes = notes;
    this.notesChanged.next(this.notes.slice());
  }

  getNotes() {
    return this.notes.slice();
  }

  getNote(index: number) {
    return this.notes[index];
  }

  addActionsToActionList(actions: Action[]) {
    this.slService.addActions(actions);
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.notesChanged.next(this.notes.slice());
  }

  updateNote(index: number, newNote: Note) {
    this.notes[index] = newNote;
    this.notesChanged.next(this.notes.slice());
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.notesChanged.next(this.notes.slice());
  }
}
