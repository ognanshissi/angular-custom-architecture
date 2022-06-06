import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {LOADING_CONFIG} from './core/layouts/components/loading/config';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LoadingModule} from './core/layouts/components';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LoadingModule.forRoot()
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        {
          provide: LOADING_CONFIG, useValue: {},
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title "ng-material-tailwind"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-material-tailwind');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('ng-material-tailwind');
  });
});
