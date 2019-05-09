import { Component } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 599;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
