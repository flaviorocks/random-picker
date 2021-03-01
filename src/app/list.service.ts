import { Injectable } from '@angular/core';
import { ListItem } from './item/list-item';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private list: ListItem[] = [];
  private listSubject = new BehaviorSubject<ListItem[]>(this.list);

  constructor(private storage: StorageService) {
    this.updateListFromStorage();
  }

  public addItem(itemToAdd: ListItem) {
    this.list.push(itemToAdd);
    this.storeList();
  }

  public getList(): Observable<ListItem[]> {
    return this.listSubject;
  }

  public removeItem(index: number) {
    this.list.splice(index, 1);
    this.storeList();
  }

  private storeList() {
    this.storage.storeList(this.list);
    this.listSubject.next(this.list);
  }

  private updateListFromStorage() {
    return this.storage
      .getList()
      .subscribe((list) => {
        this.list = list === undefined ? [] : list;
        this.listSubject.next(this.list);
      });
  }
}
