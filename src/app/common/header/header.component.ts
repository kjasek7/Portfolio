import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-header',
  animations: [
    trigger('slideInOutAnimation', [
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      transition('* => visible', [animate('500ms ease-out')]),
      transition('* => hidden', [animate('500ms ease-out')])
    ])
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showTitle = true;
  currentState: FadeState;
  socialImages: any;

  constructor() {
    this.socialImages = [
      {url: 'https://github.com/kjasek7', imagePath: 'assets/icons/social/github.png'},
      {url: 'https://www.linkedin.com/in/kamil-jasek/', imagePath: 'assets/icons/social/linkedin.png'},
      {url: 'mailto:kamil.r.jasek@gmail.com', imagePath: 'assets/icons/social/mail.png'}
    ];
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 100) {
      this.showTitle = true;
      this.currentState = 'visible';
    } else {
      this.showTitle = false;
      this.currentState = 'hidden';
    }
  }
}

