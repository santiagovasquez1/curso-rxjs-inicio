import { Observer, interval } from 'rxjs';
import { tap, take, reduce } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

/**
 * Reduce = acumula los valores dentro del observable, no emite hasta que el observable se complete 
 */

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log('total: ', total);


interval(500).pipe(
    //completa el observable cuando llega a 5
    take(6),
    tap(console.log),
    reduce(totalReducer, 0)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});