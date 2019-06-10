import { ContactComponent } from './../login/contact.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  getLoginform(){
    this.dialog.open(ContactComponent,{ width:'500px', height:'500px'});
  }
}
