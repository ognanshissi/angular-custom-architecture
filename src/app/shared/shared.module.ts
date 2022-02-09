import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

const moduleList = [
  CommonModule,
  RouterModule,
  MaterialModule
];

@NgModule({
  imports: [...moduleList],
  exports: [...moduleList],
})
export class SharedModule {}
