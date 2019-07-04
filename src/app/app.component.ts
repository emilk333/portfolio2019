import { Component, HostListener, ElementRef } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mobile:boolean;
  status:boolean = false;
  shade:boolean = false;
  element;
  

  

  ngOnInit() {
    if (window.screen.width <= 380) { // 768px portrait
      this.mobile = true;
    }

    console.log("Please dont look at my spaghetti code. I'm not a trained developer ^^")
  }

  constructor(public el: ElementRef, @Inject(DOCUMENT) document) {}

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      // const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition > 50) {
        console.log(scrollPosition);
        this.shade = true;
        
      } else {
        this.shade = false;
        
      }

    }

  showMenu() {
    this.status = !this.status;
    // this.classList.toggle('active'); 
    this.element = document.getElementById('navigation-mobile');
    this.element.classList.toggle('active');
  }


}