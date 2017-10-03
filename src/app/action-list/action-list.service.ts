import { Action } from '../shared/action.model';
import { Subject } from 'rxjs/Subject';

export class ActionListService {
  actionsChanged = new Subject<Action[]>();
  startedEditing = new Subject<number>();
  private actions: Action[] = [
    new Action('Shopping Clothes', 5),
    new Action('Booking Hotels', 10),
  ];

  getActions() {
    return this.actions.slice();
  }

  getAction(index: number) {
    return this.actions[index];
  }

  addAction(action: Action) {
    this.actions.push(action);
    this.actionsChanged.next(this.actions.slice());
  }

  addActions(actions: Action[]) {
    // for (let action of actions) {
    //   this.addAction(action);
    // }
    this.actions.push(...actions);
    this.actionsChanged.next(this.actions.slice());
  }

  updateAction(index: number, newAction: Action) {
    this.actions[index] = newAction;
    this.actionsChanged.next(this.actions.slice());
  }

  deleteAction(index: number) {
    this.actions.splice(index, 1);
    this.actionsChanged.next(this.actions.slice());
  }
}
