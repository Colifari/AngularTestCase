import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsCreateFormComponent } from './animals-create-form.component';

describe('AnimalsCreateFormComponent', () => {
  let component: AnimalsCreateFormComponent;
  let fixture: ComponentFixture<AnimalsCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalsCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
