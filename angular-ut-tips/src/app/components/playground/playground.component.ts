import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})

export class PlaygroundComponent implements OnInit {
  companyName: string;

  ngOnInit(): void {
    this.beingCalledFirst();
  }

  beingCalledFirst(): void {
    this.companyName = 'Not Tufin';
    this.beingCalledSecond();
  }

  beingCalledSecond(): void {
    this.companyName = 'Tufin';
    console.log(this.isHiringAngularDeveloper());
  }

  isHiringAngularDeveloper(): string {
    return `${this.companyName} is hiring Angular developer, send your CV to daniel.tamir@tufin.com!`;
  }

  alertCompanyName() {
    setTimeout(() => {
      alert(this.companyName);
    }, 500);
  }
}
