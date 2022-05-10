import { Observer, of } from 'rxjs';
import { tap, map, take, reduce, scan } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

/**
 * Take = toma los valores que se le pasan
 */

const numbers$ = of(1, 2, 3, 4, 5);

numbers$.pipe(
    tap(t=>console.log('antes: ', t)),
    take(2)
).subscribe(observer);