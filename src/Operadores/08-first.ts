import { Observer, of, fromEvent } from 'rxjs';
import { tap, map, take, reduce, scan, first } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

/**
 * Take = toma los valores que se le pasan
 */

const clicks$ = fromEvent<MouseEvent>(document, 'click');

clicks$.pipe(
    tap(t => console.log('antes: ', t)),
    first(x => x.clientY > 150)
).subscribe(observer);