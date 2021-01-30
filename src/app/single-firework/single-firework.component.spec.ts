import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFireworkComponent } from './single-firework.component';

describe('SingleFireworkComponent', () => {
  let component: SingleFireworkComponent;
  let fixture: ComponentFixture<SingleFireworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFireworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFireworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
