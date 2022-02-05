import { MaterialModule } from './material.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const moduleList = [
  CommonModule,
  MaterialModule
];

@NgModule({
  imports: [...moduleList],
  exports: [...moduleList],
})
export class SharedModule {}
