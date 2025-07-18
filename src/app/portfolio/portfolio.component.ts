import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  title: string = 'Amrutha Varshini - Full Stack .NET Developer';

  linkedinUrl: string = 'https://www.linkedin.com/in/yourprofile';
  githubUrl: string = 'https://github.com/yourprofile';

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
