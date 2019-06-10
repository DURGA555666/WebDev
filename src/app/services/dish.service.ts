import { Dish } from './../shared/dish';
import { Injectable } from '@angular/core';
import {  Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  login: boolean;
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
    },
    {
      id: '3',
      name: 'Pizza',
      categeory: 'VEG',
      image: '/assets/images/uthappizza.png',
      label: 'Special',
      price: 'Rs:180',
      featured: true,
      description: 'Panner with roasted chicken pizza with extra Cheese'
    }
  ];

  getDish(): Observable<Dish[]> {
    return of(this.iteam).pipe(delay(2000))
  }
  getLog(): Observable<boolean>{
    return of(this.login).pipe(delay(2000))
  }
  loggedIn(){
    this.login=true;
  }
  loggedout(){
    this.login=false;
  }
}
