import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedrijflistComponent } from './bedrijflist.component';

describe('BedrijflistComponent', () => {
  let component: BedrijflistComponent;
  let fixture: ComponentFixture<BedrijflistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedrijflistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedrijflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
