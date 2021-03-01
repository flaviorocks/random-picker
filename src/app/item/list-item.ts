import { JSONSchemaObject } from '@ngx-pwa/local-storage';

export interface IListItem {
  text: string;
}

export const IListItemSchema: JSONSchemaObject = {
  type: 'object',
  properties: {
    text: { type: 'string' },
  },
};

export class ListItem {
  public text: string;

  constructor(text: string) {
    this.text = text;
  }
}
