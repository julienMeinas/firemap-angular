import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireworkItemComponent } from './firework-item.component';

describe('FireworkItemComponent', () => {
  let component: FireworkItemComponent;
  let fixture: ComponentFixture<FireworkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireworkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireworkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
