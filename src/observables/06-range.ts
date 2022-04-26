
import { asyncScheduler, Observable, Observer, of, range } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

//Funciones para crear observables
//Range: crea un observable a partir de un rango de numeros

// const src$ = of(1, 2, 3, 4, 5);
const src$ = range(1,5,asyncScheduler)

console.log('Inicio');
src$.subscribe(observer);
console.log('Fin');