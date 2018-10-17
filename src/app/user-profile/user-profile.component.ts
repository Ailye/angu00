import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'la oui ici',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  oui: boolean;
  constructor() { }

  ngOnInit() {
    this.oui = true;
  }

}
