import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ILoadingDefaultConfig, LOADING_CONFIG} from './config';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  private readonly _config: ILoadingDefaultConfig = {
    diameter: 70,
    color: 'primary',
    hasBackDrop: true,
    vertical: 'center',
    horizontal: 'center',
  };

  constructor(
    @Inject(LOADING_CONFIG) private readonly loadingConfig: ILoadingDefaultConfig
  ) {
    this.loadingConfig = {...this._config, ...this.loadingConfig};
  }

  public defaultConfig: ILoadingDefaultConfig = {...this.loadingConfig};

  private messageSubject: Subject<string | null | undefined> = new Subject<string|null| undefined>();
  private loadingStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loadingState$: Observable<boolean> = this.loadingStateSubject.asObservable();
  message$: Observable<string | null | undefined> = this.messageSubject.asObservable();

  hide = () => this.loadingStateSubject.next(false);

  show (message?: string | null, config?: ILoadingDefaultConfig) {

    if (config) {
      this.defaultConfig = {...this.loadingConfig, ...config};
    } else {
      this.defaultConfig = {...this.loadingConfig};
    }

    this.messageSubject.next(message);
    this.loadingStateSubject.next(true);
  }
}
