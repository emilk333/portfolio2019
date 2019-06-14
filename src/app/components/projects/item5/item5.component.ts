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

  imagePath_1:string = "assets/img/tømre/field.jpg";
  imagePath_2:string = "assets/img/tømre/sketches.png";
  imagePath_3:string = "assets/img/tømre/wireframe.png";


}
