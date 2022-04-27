
import { Observer, interval, timer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

//Opciones para crear observables en intervalos de tiempo
const interval$ = interval(1000);

//Se puede programar cuando se emite el primer valor
const timer$ = timer(hoyEn5, 3000);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');