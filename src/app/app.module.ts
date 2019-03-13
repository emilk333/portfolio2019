import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';



//components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Item1Component } from './components/projects/item1/item1.component';
import { Item2Component } from './components/projects/item2/item2.component';
import { Item3Component } from './components/projects/item3/item3.component';
import { Item4Component } from './components/projects/item4/item4.component';
import { MouseWheel } from './directives/mouse-wheel.directive';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item1', component: Item1Component },
  { path: 'item2', component: Item2Component },
  { path: 'item3', component: Item3Component },
  { path: 'item4', component: Item4Component },
  { path: 'about', component: AboutComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    Item1Component,
    Item2Component,
    Item3Component,
    Item4Component,
    MouseWheel,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, fab);
  }
 }
