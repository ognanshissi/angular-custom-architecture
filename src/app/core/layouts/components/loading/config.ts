import {InjectionToken} from '@angular/core';

export interface ILoadingDefaultConfig {
  diameter?: number;
  color?: 'primary'|'accent'|'warn';
  hasBackDrop?: boolean;
  vertical?: 'top' | 'center' | 'bottom',
  horizontal?: 'left' | 'center' | 'right'
}

export const LOADING_CONFIG = new InjectionToken('LOADING_CONFIG');
