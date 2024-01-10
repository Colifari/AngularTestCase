import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../store.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.css'
})

export class AnimalsListComponent {

  animals!: Observable<string[]>;
  isError: boolean = false;
  errorText: string = "";
  
  constructor(private storeService: StoreService) {
    this.refresh();
  }

  ngOnInit() {
    // subsribe to any refresh event
    this.storeService.requireListRefreshEvent.subscribe(() => {this.refresh()});
  }

  delete(name: string) {
    console.info(`animal deletion ${name}`);
    this.storeService.delAnimal(name).subscribe({
      complete: () => {this.refresh()},
      error: (err: any) => { this.showError(err);}
      });
  }

  refresh()  {
    this.hideError();
    this.animals = this.storeService.getAnimals();
    this.animals.subscribe({error: (err: any) => { this.showError(err);} });
  }

  hideError() {
    this.isError = false;
    this.errorText = "";
  }

  showError(err: HttpErrorResponse) {
    this.isError = true;
    this.errorText = `${err.name} ${err.message}`;
  }

}
