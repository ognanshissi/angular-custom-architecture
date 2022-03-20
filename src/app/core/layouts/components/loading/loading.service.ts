import {Injectable} from "@angular/core";

export interface ILoadingDefaultConfig {
  diameter: number;
  color: 'primary'|'accent'|'warn';
  hasBackDrop: boolean;
  vertical: 'top' | 'center' | 'bottom',
  horizontal: 'left' | 'center' | 'right'
}

@Injectable({
  providedIn: "root"
})
export class LoadingService {

  defaultConfig: ILoadingDefaultConfig = {
    diameter: 30,
    color: 'primary',
    hasBackDrop: false,
    vertical: 'top',
    horizontal: 'right'
  }

  loadingState!: boolean;

  constructor() {
  }

}
