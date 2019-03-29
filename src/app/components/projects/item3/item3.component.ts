import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  logoArray = [
    {img: 'assets/img/angularpng.png'},
    {img: 'assets/img/bootstrap.png'},
  ]

  // imagePath_1:string = "assets/img/todo/s10_mockup.svg";
  // imagePath_2:string = "assets/img/todo/ipad_mockup.svg";

}
