import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickItemFormComponent } from './pick-item-form.component';

describe('PickItemFormComponent', () => {
  let component: PickItemFormComponent;
  let fixture: ComponentFixture<PickItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
