import { Component, DoCheck } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-secondarylayout',
  templateUrl: './secondarylayout.component.html',
  styleUrls: ['./secondarylayout.component.scss']
})
export class SecondarylayoutComponent implements DoCheck {
  title = 'Siphonave';

  constructor(private titler: Title, private location: Location) { }

  ngDoCheck() {
    this.title = this.titler.getTitle();
  }

  goBack() {
    this.location.back();
  }

}
