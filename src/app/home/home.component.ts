import {AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit () {
    // !function(d, s, id){
    //   let js: any;
    //   const p = 'https';
    //   const fjs = d.getElementsByTagName(s)[0];
    //
    //   if (!d.getElementById(id)) {
    //     js = d.createElement(s);
    //     js.id = id;
    //     js.src = p + '://platform.twitter.com/widgets.js';
    //     fjs.parentNode.insertBefore(js, fjs);
    //   }
    // }
    // (document, 'script', 'twitter-wjs');
  }
}
