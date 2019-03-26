import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mobile:boolean;
  status:boolean = false;

  ngOnInit() {
    if (window.screen.width <= 380) { // 768px portrait
      this.mobile = true;
      console.log("fuck");
    }
  }


  showMenu() {
    this.status = !this.status;
  }
}