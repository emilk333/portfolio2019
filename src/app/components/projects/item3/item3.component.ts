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
    {img: 'assets/img/material.svg'},
  ]

  imagePath_1:string = "assets/img/VINYL/ipad_mockup_all.png";
  // imagePath_2:string = "assets/img/VINYL/ipad_mockup – 2.png";
  // imagePath_3:string = "assets/img/VINYL/ipad_mockup – 3.png";
  imagePath_4:string = "assets/img/VINYL/Mac-mockup1.png";
  imagePath_5:string = "assets/img/VINYL/Mac-mockup2.png";

}
