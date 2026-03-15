import { Injectable, signal } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  basePrice: number;
  totalPrice: number;
  selectedOptions: { name: string; price: number }[];
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  addToCart(item: CartItem) {
    this.cartItems.update(items => [...items, item]);
    console.log(`Adăugat în coș: ${item.name} - Total: $${item.totalPrice}`);
  }

  getCartCount() {
    return this.cartItems().length;
  }
}