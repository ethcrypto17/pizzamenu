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

    this.pizzaForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      ingredients: ['', Validators.required],
      picUrl: ['']
    });    
  }

  addPizza() {
    if (this.pizzaForm.valid) {
      const newPizza = {
        name: this.pizzaForm.value.name,
        price: this.pizzaForm.value.price,
        ingredients: this.pizzaForm.value.ingredients.split(',').map(i => i.trim()),
        picUrl: this.pizzaForm.value.picUrl
      };
      this.pizzas.push(newPizza); 
      this.pizzaForm.reset();
    }
  }  
}
