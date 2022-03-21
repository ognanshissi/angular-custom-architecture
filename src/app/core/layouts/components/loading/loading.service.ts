import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export interface ILoadingDefaultConfig {
  diameter?: number;
  color?: 'primary'|'accent'|'warn';
  hasBackDrop?: boolean;
  vertical?: 'top' | 'center' | 'bottom',
  horizontal?: 'left' | 'center' | 'right'
}

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private readonly _config: ILoadingDefaultConfig = {
    diameter: 30,
    color: 'primary',
    hasBackDrop: false,
    vertical: 'top',
    horizontal: 'right'
  };

  public defaultConfig: ILoadingDefaultConfig = {...this._config};

  private readonly messageSubject: Subject<string | null | undefined> = new Subject<string|null| undefined>();
  private readonly loadingStateSubject: Subject<boolean> = new Subject<boolean>();

  public loadingState$: Observable<boolean> = this.loadingStateSubject.asObservable();
  public message$: Observable<string | null | undefined> = this.messageSubject.asObservable();

  constructor() {
  }

  hide = () => this.loadingStateSubject.next(false);

  show(message?: string | null, config?: ILoadingDefaultConfig) {
    if (config) {
      this.defaultConfig = {...this._config, ...config};
    } else {
      this.defaultConfig = {...this._config};
    }
    this.messageSubject.next(message);
    this.loadingStateSubject.next(true);
  }
}
