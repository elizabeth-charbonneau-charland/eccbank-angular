import {Component, OnInit, ViewChild} from '@angular/core';
import {IParallaxScrollConfig} from 'ng2-parallaxscroll';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.css']
})
export class HomePageHeaderComponent implements OnInit {
  parallaxConfig: IParallaxScrollConfig;

  constructor() { }

  ngOnInit() {
    this.parallaxConfig = {
      axis: 'Y',
     speed:-.2,
    }
  }

}
