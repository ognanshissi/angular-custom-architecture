import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {LoadingModule} from './layouts/components/loading';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LoadingModule.forRoot({
      diameter: 200,
    })],
  exports: [LoadingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
