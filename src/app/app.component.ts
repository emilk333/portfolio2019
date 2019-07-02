import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mobile:boolean;
  status:boolean = false;
  shade:boolean = false;

  

  ngOnInit() {
    if (window.screen.width <= 380) { // 768px portrait
      this.mobile = true;
    }
  }

  constructor(public el: ElementRef) {}

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
  }
}