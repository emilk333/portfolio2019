import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item4',
  templateUrl: './item4.component.html',
  styleUrls: ['./item4.component.css']
})
export class Item4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  logoArray = [
    {img: 'assets/img/angularpng.png'},
    {img: 'assets/img/bootstrap.png'},
    {img: 'assets/img/firestore.png'},
  ]

  imagePath_1:string = "assets/img/todo/todo_all_mockup2.png";
  // imagePath_2:string = "assets/img/todo/mac_mockup.png";
  // imagePath_3:string = "assets/img/todo/ipad_mockup.png";


}
