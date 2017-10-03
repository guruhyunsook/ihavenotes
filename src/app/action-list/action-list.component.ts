import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Action } from '../shared/action.model';
import { ActionListService } from './action-list.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit, OnDestroy {
  actions: Action[];
  private subscription: Subscription;

  constructor(private slService: ActionListService) { }

  ngOnInit() {
    this.actions = this.slService.getActions();
    this.subscription = this.slService.actionsChanged
      .subscribe(
        (actions: Action[]) => {
          this.actions = actions;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
