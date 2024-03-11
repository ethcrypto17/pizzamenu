export interface Pizza {
    id: number;
    name: string;
    ingredients: string[];
    price: number;
    picUrl?: string;
  }
  
  export interface PizzaMenu {
    pizza: Pizza[];
  }
  