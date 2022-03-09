import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-material-tailwind';

  // Add router event
  constructor (
    private _router: Router
  ) {
    this._handleNavigationEvent();
  }

  private _handleNavigationEvent(): void {
    this._router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      // Start global (page loader)
      this._startLoader(); // TODO: You can use a global loadingService
    });

    // Stop loader
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
    ).subscribe(() => {
      this._stopLoader();
    });
  }

  private _startLoader(): boolean {
    return true;
  }

  private _stopLoader(): boolean {
    return false;
  }
}
