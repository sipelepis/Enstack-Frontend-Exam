import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BedPage } from './bed.page';

describe('BedPage', () => {
  let component: BedPage;
  let fixture: ComponentFixture<BedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
