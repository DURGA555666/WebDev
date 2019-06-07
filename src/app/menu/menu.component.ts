import { Dish } from './../shared/dish';
import { Component, OnInit } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[]=[
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
  selectedDish: Dish;
  constructor(private _ngZone: NgZone) {}

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  ngOnInit() {
  }
  addtoCart(index){
    this.selectedDish=index;
  }

}
