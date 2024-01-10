import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const HTTP_API_BASE = "http://localhost:5003/api";

@Injectable({
  providedIn: 'root'
})


export class StoreService {

  constructor(private http: HttpClient) { }

  getAnimals() {
    return this.http.get<string[]>(`${HTTP_API_BASE}/animals`);
  }

  putAnimal(name: string | null | undefined): Observable<boolean> {
    return this.http.put<boolean>(`${HTTP_API_BASE}/animals?name=${name}`, null);
  }

  delAnimal(name: string): Observable<boolean> {
    return this.http.delete<boolean>(`${HTTP_API_BASE}/animals?name=${name}`);
  }

  @Output() requireListRefreshEvent = new EventEmitter();

  requireListRefresh() {
    this.requireListRefreshEvent.emit();
  }
}
