import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  IterableDiffer,
  IterableDiffers,
  Output,
} from '@angular/core';
import { ListItem } from '../item/list-item';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-pick-item-form',
  templateUrl: './pick-item-form.component.html',
  styleUrls: ['./pick-item-form.component.scss'],
})
export class PickItemFormComponent implements DoCheck {
  @Input() sourceList: ListItem[] = [];
  @Output() pickedList = new EventEmitter<ListItem[]>();

  public pickItemsForm = new FormGroup({
    size: new FormControl(null, this.sizeValidators),
  });
  private iterableDiffer: IterableDiffer<unknown>;

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create();
  }

  ngDoCheck(): void {
    const sourceChanged = this.iterableDiffer.diff(this.sourceList);

    if (sourceChanged) {
      const sizeControl = this.pickItemsForm.get('size');

      sizeControl?.setValidators(this.sizeValidators);
      sizeControl?.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.pickItemsForm.invalid) {
      return;
    }

    const pickedList = this.pickFromList(this.sourceList, this.pickItemsForm.get('size')?.value);

    this.pickedList.emit(pickedList);
  }

  private get sizeValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.min(1),
      Validators.max(this.sourceList.length),
    ]
  }

  private pickFromList(list: ListItem[], size: number): ListItem[] {
    const selectedIndices: number[] = [];

    while (selectedIndices.length < size) {
      const randomIndex = Math.floor(Math.random() * list.length);
      if (!selectedIndices.includes(randomIndex)) {
        selectedIndices.push(randomIndex);
      }
    }

    return selectedIndices.map(selectedIndex => list[selectedIndex]);
  }
}
