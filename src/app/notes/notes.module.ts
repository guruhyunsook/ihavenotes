import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NotesComponent } from './notes.component';
import { NoteStartComponent } from './note-start/note-start.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteItemComponent } from './note-list/note-item/note-item.component';
import { NotesRoutingModule } from './notes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotesComponent,
    NoteStartComponent,
    NoteListComponent,
    NoteEditComponent,
    NoteDetailComponent,
    NoteItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotesRoutingModule,
    SharedModule
  ]
})
export class NotesModule {}
