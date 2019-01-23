import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {

  faLinkedin = faLinkedin;
  selectedIndex:number;
  transform: number;

  sliderArray = [
    {img: 'assets/img/dog.jpg', alt: 'dog', text: 'here is a pic of a dog'},
    {img: 'assets/img/rose.jpg', alt: 'rose', text: 'here is a pic of a rose'},
    {img: 'assets/img/burger.jpg', alt: 'burger', text: 'here is a pic of a burger'},
    {img: 'assets/img/burger.jpg', alt: 'burger', text: 'here is a pic of a burger'},
  ];

  constructor() {
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }
   
  downSelected(i) {
  this.transform =  100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if(this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }




}
