import { Injectable } from '@angular/core';
import { JSONSchema, StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { IListItemSchema, ListItem } from './item/list-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly listSchema: JSONSchema = {
    type: 'array',
    items: IListItemSchema,
  };

  constructor(private storage: StorageMap) { }

  getList(): Observable<ListItem[] | undefined> {
    return this.storage.get<ListItem[]>('list', this.listSchema);
  }

  storeList(listToStore: ListItem[]) {
    this.storage
      .set('list', listToStore, this.listSchema)
      .subscribe(() => {});
  }
}
