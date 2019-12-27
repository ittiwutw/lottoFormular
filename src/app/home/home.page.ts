import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    slidesPerView: 3.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 400,
    autoplay: false
  };
  constructor(private router: Router) { }

  onClickResult() {
    this.router.navigate(['/lotto-result']);
  }

}
