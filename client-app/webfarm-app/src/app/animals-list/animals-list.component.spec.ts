import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsListComponent } from './animals-list.component';

describe('AnimalsListComponent', () => {
  let component: AnimalsListComponent;
  let fixture: ComponentFixture<AnimalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
