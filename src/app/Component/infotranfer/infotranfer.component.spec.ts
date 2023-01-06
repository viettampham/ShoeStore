import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotranferComponent } from './infotranfer.component';

describe('InfotranferComponent', () => {
  let component: InfotranferComponent;
  let fixture: ComponentFixture<InfotranferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfotranferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfotranferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
