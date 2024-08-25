import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { logAction, LoggerEffects } from './effects/counter.effects';

// local module imports
import { increment, decrement, reset, setCounter } from './actions/counter.action';
import { selectCounter } from './selectors/counter.selector';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, EffectsModule],
  providers: [
    LoggerEffects, 
    // provideEffects(LoggerEffects),
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count$!:Observable<number>;
  isActive:boolean = false;
  

  constructor (
    private store: Store<{counter: number}>,
  ) {
    // this.count$ = this.store.select(state => state.counter);;
    this.count$ = this.store.select(selectCounter);
    this.count$.subscribe(value => localStorage.setItem('counter', JSON.stringify(value)));

  };

  getInterval (value:string) {
    this.isActive = value ? true : false;
  }

  increase (value: string) {
    const payload = 'increasing';
    this.store.dispatch(logAction({payload}))
    this.store.dispatch(increment({interval: +value}));
  };

  decrease (value: string) {
    const payload = 'decreasing';
    this.store.dispatch(logAction({payload}));
    this.store.dispatch(decrement({interval: +value}));
  };

  reset () {
    this.store.dispatch(reset());
  };

  setCounter (value:string) {
    this.store.dispatch(setCounter({counter: +value}));
  }

}

