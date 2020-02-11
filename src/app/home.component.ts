import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  frontendSkills: any;

  constructor() {
    this.frontendSkills = [
      {
        skillName: 'css',
        imageUrl: 'assets/icons/frontend/css.png'
      },
      {
        skillName: 'html',
        imageUrl: 'assets/icons/frontend/html.png'
      }
    ];
  }

  ngOnInit(): void {
  }

}
