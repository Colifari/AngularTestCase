import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-animals-create-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './animals-create-form.component.html',
  styleUrl: './animals-create-form.component.css'
})

export class AnimalsCreateFormComponent {

  creationForm = this.formBuilder.group({
    name: ''
  });

  constructor(private storeService: StoreService, private formBuilder: FormBuilder) { }
  
  onSubmit() {
    console.info('Animal added from form', this.creationForm.value);
    this.storeService.putAnimal(this.creationForm.value.name).subscribe(e => this.storeService.requireListRefresh() );
    this.creationForm.reset();
  }
}
