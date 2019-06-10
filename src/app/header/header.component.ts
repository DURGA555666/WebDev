import { DishService } from './../services/dish.service';
import { ContactComponent } from './../login/contact.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,private service: DishService) { }
  showButton: boolean;
  ngOnInit() {
   this.service.getLog().subscribe(value => this.showButton=value);
   console.log(this.showButton);
  }
  getLoginform(){
    this.dialog.open(ContactComponent,{ width:'500px', height:'500px'});
    //this.showButton=this.service.login;
  }
  getSignout(){
    this.service.loggedout();
  }
}
