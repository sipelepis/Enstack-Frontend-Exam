import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesTabPage } from './favorites-tab.page';

describe('FavoritesTabPage', () => {
  let component: FavoritesTabPage;
  let fixture: ComponentFixture<FavoritesTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FavoritesTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
