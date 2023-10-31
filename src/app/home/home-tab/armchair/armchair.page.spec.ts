import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmchairPage } from './armchair.page';

describe('ArmchairPage', () => {
  let component: ArmchairPage;
  let fixture: ComponentFixture<ArmchairPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmchairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
