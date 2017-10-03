import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { NoteService } from '../notes/note.service';
import { Note } from '../notes/note.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private noteService: NoteService,
              private authService: AuthService) {
  }

  storeNotes() {
    const token = this.authService.getToken();

    return this.http.put('https://ng-shop-01.firebaseio.com/ng-shop-01.json?auth=' + token, this.noteService.getNotes());
  }

  getNotes() {
    const token = this.authService.getToken();

    this.http.get('https://ng-shop-01.firebaseio.com/ng-shop-01.json?auth=' + token)
      .map(
        (response: Response) => {
          const notes: Note[] = response.json();
          for (let note of notes) {
            if (!note['actions']) {
              note['actions'] = [];
            }
          }
          return notes;
        }
      )
      .subscribe(
        (notes: Note[]) => {
          this.noteService.setNotes(notes);
        }
      );
  }
}
