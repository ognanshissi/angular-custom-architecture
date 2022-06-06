import {Component, OnInit} from '@angular/core';
import {LoadingService} from './loading.service';
import {combineLatest, map, Observable} from 'rxjs';

interface LoadingData {
  loading: boolean;
  message: string | null | undefined;
}

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {

  data$!: Observable<LoadingData>;

  constructor (
    public config: LoadingService
  ) {
  }

  ngOnInit (): void {

    this.data$ = combineLatest([this.config.loadingState$, this.config.message$]).pipe(
      map(([loading, message]) => {
        return {
          loading,
          message,
        };
      }),
    );
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

  getClasses (): string[] {
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
