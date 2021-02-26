import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListItem } from '../item/list-item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent {
  @Output() newItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  addItemForm = new FormGroup({
    text: new FormControl('', [
      Validators.required,
    ]),
  });

  onSubmit() {
    if (this.addItemForm.invalid) {
      return;
    }

    const listItem = new ListItem(this.addItemForm.get('text')?.value);
    this.newItem.emit(listItem);
    this.addItemForm.reset();
  }
}
