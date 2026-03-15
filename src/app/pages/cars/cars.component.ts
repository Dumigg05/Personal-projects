import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CartService } from '../../services/cart.service';

interface CarOption {
  name: string;
  price: number;
  selected: boolean;
}

interface Car {
  id: number;
  name: string;
  year: number;
  mileage: string;
  engine: string;
  hp: string;
  description: string;
  basePrice: number;
  imageUrl: string;
  options: CarOption[];
}

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cartService = inject(CartService);

  cars: Car[] = [
    {
      id: 1,
      name: 'Porsche Taycan',
      year: 2024,
      mileage: '5,200 miles',
      engine: 'Dual Electric Motors',
      hp: '560 HP',
      description: 'The Porsche Taycan represents the future of luxury electric performance. With lightning-fast acceleration and exceptional build quality.',
      basePrice: 89900,
      imageUrl: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=600&h=400&q=80',
      options: [
        { name: 'Premium Paint', price: 2500, selected: false },
        { name: 'Performance Package', price: 5200, selected: false },
        { name: 'Carbon Fiber Interior', price: 3800, selected: false },
        { name: 'Extended Warranty', price: 2100, selected: false }
      ]
    },
    {
      id: 2,
      name: 'Mercedes-AMG GT',
      year: 2024,
      mileage: '3,100 miles',
      engine: '4.0L V8 Biturbo',
      hp: '577 HP',
      description: 'The Mercedes-AMG GT embodies racing heritage with aggressive styling and powerful performance.',
      basePrice: 138200,
      imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80',
      options: [
        { name: 'AMG Track Package', price: 6500, selected: false },
        { name: 'Carbon Fiber Trim', price: 3200, selected: false },
        { name: 'Ceramic Brakes', price: 8900, selected: false }
      ]
    },
    {
      id: 3,
      name: 'BMW M4 Competition',
      year: 2024,
      mileage: '1,200 miles',
      engine: '3.0L Twin-Turbo I6',
      hp: '503 HP',
      description: 'The BMW M4 delivers thrilling dynamics and bold styling, offering a pure driving experience combined with everyday usability.',
      basePrice: 78100,
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&h=400&q=80',
      options: [
        { name: 'M Carbon Exterior', price: 4700, selected: false },
        { name: 'Executive Package', price: 2800, selected: false },
        { name: 'M Carbon Bucket Seats', price: 3800, selected: false }
      ]
    },
    {
      id: 4,
      name: 'Audi RS6 Avant',
      year: 2023,
      mileage: '8,500 miles',
      engine: '4.0L V8 Twin-Turbo',
      hp: '591 HP',
      description: 'The ultimate family supercar. The RS6 Avant combines the practicality of a wagon with the heart-stopping performance of a track car.',
      basePrice: 121900,
      imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&h=400&q=80',
      options: [
        { name: 'Carbon Optic Package', price: 5350, selected: false },
        { name: 'Sport Exhaust', price: 1000, selected: false },
        { name: 'Driver Assistance', price: 2250, selected: false }
      ]
    },
    {
      id: 5,
      name: 'Chevrolet Corvette Z06',
      year: 2024,
      mileage: '500 miles',
      engine: '5.5L Flat-Plane V8',
      hp: '670 HP',
      description: 'An American mid-engine masterpiece that rivals European exotics with its high-revving naturally aspirated V8.',
      basePrice: 106395,
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&h=400&q=80',
      options: [
        { name: 'Z07 Performance Package', price: 8995, selected: false },
        { name: 'Carbon Fiber Aero', price: 8495, selected: false },
        { name: 'Front Lift System', price: 2595, selected: false }
      ]
    },
    
  ];

  getTotalPrice(car: Car): number {
    const optionsTotal = car.options
      .filter(opt => opt.selected)
      .reduce((sum, opt) => sum + opt.price, 0);
    return car.basePrice + optionsTotal;
  }

  getOptionsTotal(car: Car): number {
    return car.options
      .filter(opt => opt.selected)
      .reduce((sum, opt) => sum + opt.price, 0);
  }

  addToCart(car: Car) {
    const itemToAdd = {
      id: car.id,
      name: car.name,
      basePrice: car.basePrice,
      totalPrice: this.getTotalPrice(car),
      imageUrl: car.imageUrl,
      selectedOptions: car.options.filter(o => o.selected)
    };
    
    this.cartService.addToCart(itemToAdd);
    alert(`${car.name} a fost adăugat în coș!`);
  }
}