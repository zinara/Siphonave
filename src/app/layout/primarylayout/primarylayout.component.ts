import { Component, ChangeDetectorRef, OnDestroy, DoCheck } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-primarylayout',
  templateUrl: './primarylayout.component.html',
  styleUrls: ['./primarylayout.component.scss']
})
export class PrimarylayoutComponent implements OnDestroy, DoCheck {
  mobileQuery: MediaQueryList;
  title = 'Siphonave';

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private titler: Title) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngDoCheck() {
    this.title = this.titler.getTitle();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
