import { Dish } from './../shared/dish';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  iteam : Dish[]=[
    {
      id: '1',
      name: 'Dosa',
      categeory: 'VEG',
      image: '../assets/images/Dosa.jpg',
      label: 'Special',
      price: 'Rs:50',
      featured: true,
      description: 'Spicy creamy tasty tiffine'
    },
    {
      id: '2',
      name: 'Vada',
      categeory: 'VEG',
      image: '/assets/images/vadonut.png',
      label: 'Special',
      price: 'Rs:100',
      featured: true,
      description: 'Spicy creamy tasty Telangana Tiffine'
    }
  ];
  getDish(): Dish[]{
    return this.iteam;
  }
}
