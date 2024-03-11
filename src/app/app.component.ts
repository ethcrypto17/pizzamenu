import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pizzas: any[] = [];
  pizzaForm: FormGroup;

  constructor(private pizzaService: PizzaService, private fb: FormBuilder) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzas = data;
    });
  }


}
