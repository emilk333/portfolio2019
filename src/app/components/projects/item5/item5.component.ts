import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item5',
  templateUrl: './item5.component.html',
  styleUrls: ['./item5.component.css']
})
export class Item5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logoArray = [
    {img: 'assets/img/css+html.png'},
    {img: 'assets/img/js.png'},
  ]

  // imagePath_1:string = "assets/img/todo/s10_mockup.svg";
  // imagePath_2:string = "assets/img/todo/ipad_mockup.svg";


}
