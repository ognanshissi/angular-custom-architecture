import { Component } from '@angular/core';
import {LoadingService} from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(
    public config: LoadingService
  ) {
  }

  verticalClasses = () => {
    if (this.config.defaultConfig.vertical == 'top') {
      return ['items-start']
    } else if (this.config.defaultConfig.vertical == 'center') {
      return ['items-center']
    } else {
      return ['items-end']
    }
  }

  horizontalClasses = () => {
    if (this.config.defaultConfig.horizontal == 'left') {
      return ['justify-start']
    } else if (this.config.defaultConfig.horizontal == 'center') {
      return ['justify-center']
    } else {
      return ['justify-end']
    }
  }

  hasBackDrop = () => ['bg-black bg-opacity-50 items-start z-50 '];

  getClasses(): string[] {
    let classes: string[] = [];
    if (this.config.defaultConfig.hasBackDrop) {
      classes = [...this.hasBackDrop()]
    }

    // verticalClasses
    classes = [...classes, ...this.verticalClasses()];

    // Horizontal classes
    classes = [...classes, ' ', ...this.horizontalClasses()];

    console.log(classes);
    return classes;
  }

}
