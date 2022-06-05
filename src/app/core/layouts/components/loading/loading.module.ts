import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from './loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ILoadingDefaultConfig, LOADING_CONFIG} from './config';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
})
export class LoadingModule {

  public static forRoot (loadingConfig?: Partial<ILoadingDefaultConfig>): ModuleWithProviders<any> {
    return {
      ngModule: LoadingModule,
      providers: [
        {
          provide: LOADING_CONFIG,
          useValue: loadingConfig,
        }
      ]
    };
  }
}
