import { Observer, range, interval, from } from 'rxjs';
import { tap, map, take, reduce, scan } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

/**
 * Scan = acumula los valores dentro del observable, no emite hasta que el observable se complete   
 */

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

//Reduce
from(numbers).pipe(
    reduce(totalReducer, 0)
).subscribe(observer);

//Scan
// Emite el valor acumulado
console.log('*************************');
from(numbers).pipe(
    scan(totalReducer, 0)
).subscribe(observer);


//Patron redux
console.log('*************************');
interface Usuario {
    id?: number;
    auntenticado?: boolean;
    token?: string;
    edad?: number;
}

const users: Usuario[] = [
    { id: 1, auntenticado: false, token: null },
    { id: 1, auntenticado: false, token: 'ABC' },
    { id: 1, auntenticado: false, token: 'ABC123' },
];

const state$ = from(users).pipe(
    scan<Usuario>((acc, curr) => {
        return { ...acc, ...curr };
    })
);

const id$ = state$.pipe(
    map((state) => state.id)
);

id$.subscribe(console.log);