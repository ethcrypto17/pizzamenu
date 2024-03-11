import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private jsonUrl = 'assets/pizzas.json';

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<any[]> {
    return this.http.get<{pizza: any[]}>(this.jsonUrl).pipe(
      map(response => response.pizza)
    );
  }
  
}
