import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  id: number;
  editMode = false;
  noteForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private noteService: NoteService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newNote = new Note(
    //   this.noteForm.value['name'],
    //   this.noteForm.value['description'],
    //   this.noteForm.value['imagePath'],
    //   this.noteForm.value['actions']);
    if (this.editMode) {
      this.noteService.updateNote(this.id, this.noteForm.value);
    } else {
      this.noteService.addNote(this.noteForm.value);
    }
    this.onCancel();
  }

  onAddAction() {
    (<FormArray>this.noteForm.get('actions')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteAction(index: number) {
    (<FormArray>this.noteForm.get('actions')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let noteName = '';
    let noteImagePath = '';
    let noteDescription = '';
    let noteActions = new FormArray([]);

    if (this.editMode) {
      const note = this.noteService.getNote(this.id);
      noteName = note.name;
      noteImagePath = note.imagePath;
      noteDescription = note.description;
      if (note['actions']) {
        for (let action of note.actions) {
          noteActions.push(
            new FormGroup({
              'name': new FormControl(action.name, Validators.required),
              'amount': new FormControl(action.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.noteForm = new FormGroup({
      'name': new FormControl(noteName, Validators.required),
      'imagePath': new FormControl(noteImagePath, Validators.required),
      'description': new FormControl(noteDescription, Validators.required),
      'actions': noteActions
    });
  }

}
