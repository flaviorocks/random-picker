import { Component, OnInit } from '@angular/core';

import { ListItem } from './item/list-item';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public sourceList: ListItem[] = [];
  public pickedList: ListItem[] = [];

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.watchList();
  }

  deleteItem(index: number) {
    this.listService.removeItem(index);
  }

  onNewItem(newItem: ListItem) {
    this.listService.addItem(newItem);
  }

  onPickedList(pickedList: ListItem[]) {
    this.pickedList = pickedList;
  }

  private watchList() {
    this.listService
      .getList()
      .subscribe((list) => {
        this.sourceList = list;
      })
  }
}
