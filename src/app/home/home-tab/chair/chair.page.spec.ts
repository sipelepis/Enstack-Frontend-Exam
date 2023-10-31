import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChairPage } from './chair.page';

describe('ChairPage', () => {
  let component: ChairPage;
  let fixture: ComponentFixture<ChairPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
