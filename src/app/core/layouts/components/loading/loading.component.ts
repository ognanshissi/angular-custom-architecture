import {Component, OnInit} from '@angular/core';
import {LoadingService} from './loading.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading$!: Observable<boolean>;

  message!: string | null | undefined;

  constructor(
    public config: LoadingService
  ) {
  }

  ngOnInit() {
    this.isLoading$ = this.config.loadingState$;
    this.config.message$.subscribe(message => {
      this.message = message;
    });
  }

  verticalClasses = () => {
    if (this.config.defaultConfig.vertical === 'top') {
      return ['items-start'];
    } else if (this.config.defaultConfig.vertical === 'center') {
      return ['items-center'];
    } else {
      return ['items-end'];
    }
  };

  horizontalClasses = () => {
    if (this.config.defaultConfig.horizontal === 'left') {
      return ['justify-start'];
    } else if (this.config.defaultConfig.horizontal === 'center') {
      return ['justify-center'];
    } else {
      return ['justify-end'];
    }
  };

  hasBackDrop = () => ['bg-black bg-opacity-50 items-start z-40 '];

  getClasses(): string[] {
    let classes: string[] = [];
    if (this.config.defaultConfig.hasBackDrop) {
      classes = [...this.hasBackDrop()];
    }
    // verticalClasses
    classes = [...classes, ...this.verticalClasses()];
    // Horizontal classes
    classes = [...classes, ' ', ...this.horizontalClasses()];
    return classes;
  }

}
