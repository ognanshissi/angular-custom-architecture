import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs';
import {LoadingService} from './core/layouts/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-material-tailwind';

  // Add router event
  constructor (
    private _router: Router,
    private _loading: LoadingService,
  ) {
    this._handleNavigationEvent();
  }

  showLoader() {
    this._loading.show('Chargement en cours...', {vertical: 'center', horizontal: 'center', diameter: 50});
    setTimeout(() => this._loading.hide(), 5000);
  }

  showLoaderNoMessage() {
    this._loading.show(null, {vertical: 'center', horizontal: 'center', diameter: 100});
    setTimeout(() => this._loading.hide(), 5000);
  }

  showLoaderMessage() {
    this._loading.show('Loading...', {vertical: 'top', horizontal: 'right'});
    setTimeout(() => this._loading.hide(), 5000);
  }

  showLoaderBackDrop() {
    this._loading.show(null, {hasBackDrop: true, diameter: 100, vertical: 'center', horizontal: 'center'});
    setTimeout(() => this._loading.hide(), 5000);
  }

  private _handleNavigationEvent(): void {
    this._router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(event => {
      // Start global (page loader)
      this._startLoader();
    });

    // Stop loader
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
    ).subscribe(event => {
      this._stopLoader();
    });
  }

  private _startLoader(): void {
    this._loading.show('',
      {
        hasBackDrop: true,
        diameter: 40,
        vertical: 'center',
        horizontal: 'center',
      });
  }

  private _stopLoader (): void {
    this._loading.hide();
  }
}
