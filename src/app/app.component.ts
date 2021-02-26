import { Component } from '@angular/core';

import { ListItem } from './item/list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public list = new Set<ListItem>();

  onNewItem(newItem: ListItem) {
    this.list.add(newItem);
  }
}
