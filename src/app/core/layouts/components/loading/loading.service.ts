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

  public defaultConfig: ILoadingDefaultConfig = {
    diameter: 30,
    color: 'primary',
    hasBackDrop: false,
    vertical: 'top',
    horizontal: 'right'
  };

  private readonly messageSubject: Subject<string | null | undefined> = new Subject<string|null| undefined>();
  private readonly loadingStateSubject: Subject<boolean> = new Subject<boolean>();

  public loadingState$: Observable<boolean> = this.loadingStateSubject.asObservable();
  public message$: Observable<string | null | undefined> = this.messageSubject.asObservable();

  constructor() {
  }

  hide = () => this.loadingStateSubject.next(false);

  show(message?: string | null, config?: ILoadingDefaultConfig) {
    this.defaultConfig = {...this.defaultConfig, ...config};
    this.messageSubject.next(message);
    this.loadingStateSubject.next(true);
  }
}
