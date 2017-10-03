import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteStartComponent } from './note-start/note-start.component';
import { NotesComponent } from './notes.component';

const notesRoutes: Routes = [
  { path: '', component: NotesComponent, children: [
    { path: '', component: NoteStartComponent },
    { path: 'new', component: NoteEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: NoteDetailComponent },
    { path: ':id/edit', component: NoteEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(notesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class NotesRoutingModule {}
