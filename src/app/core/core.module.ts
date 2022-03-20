import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoadingModule} from "./layouts/components/loading/loading.module";

@NgModule({
  imports: [CommonModule, HttpClientModule, LoadingModule],
  exports: [LoadingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
