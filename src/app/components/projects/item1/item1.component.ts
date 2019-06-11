import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logoArray = [
    {img: 'assets/img/xd.png'},
  ]

  imagePath_1:string = "assets/img/DB/workshop.jpg";
  imagePath_2:string = "assets/img/DB/UJ.png";
  imagePath_3:string = "assets/img/DB/lowfi.png";


}
