import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as fromContador from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
      console.log(contador);
    });
  }

  incrementar() {
    // this.contador++;
    const accion = new fromContador.IncrementarAction();

    this.store.dispatch(accion);
  }
  decrementar() {
    // this.contador--;
    const accion = new fromContador.DecrementarAction();
    this.store.dispatch(accion);
  }
}
