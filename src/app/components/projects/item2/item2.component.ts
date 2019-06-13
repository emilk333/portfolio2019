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

  imagePath_1:string = "assets/img/VIP/hospital.jpg";
  imagePath_2:string = "assets/img/VIP/map.jpg";
  imagePath_3:string = "assets/img/VIP/idea.jpg";
  imagePath_4:string = "assets/img/VIP/VIP-interfacedisplay_portfolio.png";

}
