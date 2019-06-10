import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  user = {username: '', password: '', remember: false};
  constructor(public dialogRef: MatDialogRef<ContactComponent>) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }

}
