import { Component } from '@angular/core';

import { ListItem } from './item/list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public list: ListItem[] = [];

  onNewItem(newItem: ListItem) {
    this.list.push(newItem);
  }

  deleteItem(index: number) {
    this.list.splice(index, 1);
  }
}
