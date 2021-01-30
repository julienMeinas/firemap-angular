import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFireworkComponent } from './edit-firework.component';

describe('EditFireworkComponent', () => {
  let component: EditFireworkComponent;
  let fixture: ComponentFixture<EditFireworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFireworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFireworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
