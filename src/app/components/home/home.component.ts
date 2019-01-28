import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';


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
    {img: 'assets/img/dog.jpg', alt: 'dog', text: 'here is a pic of a dog', url: "/item1"},
    {img: 'assets/img/rose.jpg', alt: 'rose', text: 'here is a pic of a rose', url: "/item2"},
    {img: 'assets/img/burger.jpg', alt: 'burger', text: 'here is a pic of a burger', url: "/item3"},
    {img: 'assets/img/burger.jpg', alt: 'burger', text: 'here is a pic of a burger', url: "/item4"},
  ];

  constructor(private router: Router) {
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
  }

  inspectProject(x) {
    console.log(x);
    this.router.navigateByUrl(this.sliderArray[x].url);
  }

  next(x) {
    console.log(x)
    this.downSelected(x);
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i) {
    console.log(i)
  this.transform =  100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    // if selectedIndex is higher than 4 projects, start the cycle again
    if(this.selectedIndex > 3) {
      this.selectedIndex = 0;
    }
  }




}
