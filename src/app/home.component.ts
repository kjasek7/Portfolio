import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  frontendSkills: any;
  backendSkills: any;
  toolsSkills: any;

  constructor() {
    this.frontendSkills = [
      {skillName: 'html', imagePath: 'assets/icons/frontend/html.png'},
      {skillName: 'css', imagePath: 'assets/icons/frontend/css.png'},
      {skillName: 'typescript', imagePath: 'assets/icons/frontend/typescript.png'},
      {skillName: 'angular', imagePath: 'assets/icons/frontend/angular.png'}
    ];

    this.backendSkills = [
      {skillName: 'java', imagePath: 'assets/icons/backend/java.png'},
      {skillName: 'spring', imagePath: 'assets/icons/backend/spring.png'},
      {skillName: 'hibernate', imagePath: 'assets/icons/backend/hibernate.png'},
      {skillName: 'sql', imagePath: 'assets/icons/backend/sql.png'}
    ];

    this.toolsSkills = [
      {skillName: 'intelij', imagePath: 'assets/icons/tools/intelij.png'},
      {skillName: 'git', imagePath: 'assets/icons/tools/git.png'},
      {skillName: 'jira', imagePath: 'assets/icons/tools/jira.png'},
      {skillName: 'docker', imagePath: 'assets/icons/tools/docker.png'}
    ];
  }

  ngOnInit(): void {
  }
}
