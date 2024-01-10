import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsCreateFormComponent } from './animals-create-form/animals-create-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AnimalsListComponent, AnimalsCreateFormComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webfarm-app';
}
