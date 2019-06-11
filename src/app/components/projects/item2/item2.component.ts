import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logoArray = [
    {img: 'assets/img/xd.png'},
    {img: 'assets/img/photoshop.png'},
  ]

  imagePath_1:string = "assets/img/todo/s10_mockup.svg";
  imagePath_2:string = "assets/img/todo/ipad_mockup.svg";

}
