import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarksTabPage } from './bookmarks-tab.page';

describe('BookmarksTabPage', () => {
  let component: BookmarksTabPage;
  let fixture: ComponentFixture<BookmarksTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookmarksTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
