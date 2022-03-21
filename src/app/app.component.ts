import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs';
import {LoadingService} from './core/layouts/components/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-material-tailwind';

  // Add router event
  constructor(
    private _router: Router,
    private _loading: LoadingService
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

  showLoader() {
    this._loading.show('Chargement en cours...',{vertical: 'center', horizontal: 'center'});
    setTimeout(() => this._loading.hide(), 5000);
  }

  showLoaderNoMessage() {
    this._loading.show(null,{vertical: 'center', horizontal: 'center'});
    setTimeout(() => this._loading.hide(), 5000);
  }

  showLoaderMessage() {
    this._loading.show('Loading...',{vertical: 'top', horizontal: 'right'});
    setTimeout(() => this._loading.hide(), 5000);
  }
}
