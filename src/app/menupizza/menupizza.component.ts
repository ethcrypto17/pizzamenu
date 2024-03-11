import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-menupizza',
  templateUrl: './menupizza.component.html',
  styleUrl: './menupizza.component.css'
})
export class MenupizzaComponent implements OnInit {
  
  constructor(private fb: FormBuilder) {}

  @Input() pizzas: any[] = [];
  pizzaForm: FormGroup;

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

  ngOnInit() {
    this.pizzaForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      ingredients: ['', Validators.required],
      picUrl: ['']
    });    
  }
}
