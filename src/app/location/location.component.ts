import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  longitude: number;
  latitude : number;
  constructor() { }

  ngOnInit() {
  }
  getMapCoordinated(event){
    this.longitude = event.coords.lat;
    this.latitude = event.coords.lng;
  }


}
