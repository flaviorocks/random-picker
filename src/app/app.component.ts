import { Component } from '@angular/core';

import { ListItem } from './item/list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sourceList: ListItem[] = [];
  public pickedList: ListItem[] = [];

  deleteItem(index: number) {
    this.sourceList.splice(index, 1);
  }

  onNewItem(newItem: ListItem) {
    this.sourceList.push(newItem);
  }

  onPickedList(pickedList: ListItem[]) {
    this.pickedList = pickedList;
  }
}
