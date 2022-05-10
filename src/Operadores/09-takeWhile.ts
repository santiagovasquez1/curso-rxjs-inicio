import { Observer, of, fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const clicks$ = fromEvent<MouseEvent>(document, 'click');

clicks$.pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150, true)
).subscribe(observer);