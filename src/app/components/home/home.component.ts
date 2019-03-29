import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewChecked, ElementRef,  HostListener  } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { MouseWheel } from '../../directives/mouse-wheel.directive';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})


export class HomeComponent implements OnInit {

  mouseWheelDir: string = '';
  faLinkedin = faLinkedin;
  selectedIndex:number;
  transform: number;

  sliderArray = [
    {img: 'assets/img/plant.jpg', alt: 'plant', text: 'Colors of the ocean', description: 'A Sea slug exhibition', url: "/item1"},
    {img: 'assets/img/woman.jpg', alt: 'rose', text: 'Write it down yo yo mother', description: 'A to do list application', url: "/item2"},
    {img: 'assets/img/bar.jpg', alt: 'burger', text: 'Vinylondemand jeg knepper dig', description: 'Concept for a vinyl distribution service', url: "/item3"},
    {img: 'assets/img/burger.jpg', alt: 'burger', text: 'VIP system re-imagined', description: 'A Service design project for the Healthcare sector', url: "/item4"},
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

  mouseWheelUpFunc(x) {
    this.mouseWheelDir = 'upward direction';
    console.log(this.mouseWheelDir);
    this.next(x);
  }

  mouseWheelDownFunc() {
    this.mouseWheelDir = 'downward direction';
    console.log(this.mouseWheelDir);
  }




}
