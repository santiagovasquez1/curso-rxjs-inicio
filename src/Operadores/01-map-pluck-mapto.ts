
import { Observer, range } from 'rxjs';
import { filter, map, mapTo, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

/**
 * filter = filtra los valores que cumplan la condicion
 */

const source$ = range(1, 100);

const filter$ = source$.pipe(
    filter(value => value % 2 === 0)
);

filter$.subscribe(observer);