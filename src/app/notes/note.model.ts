import { Action } from '../shared/action.model';

export class Note {
  public name: string;
  public description: string;
  public imagePath: string;
  public actions: Action[];

  constructor(name: string, desc: string, imagePath: string, actions: Action[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.actions = actions;
  }
}
