import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailBillComponent } from './dialog-detail-bill.component';

describe('DialogDetailBillComponent', () => {
  let component: DialogDetailBillComponent;
  let fixture: ComponentFixture<DialogDetailBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetailBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDetailBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
