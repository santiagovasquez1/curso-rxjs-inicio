import { Observer, of, fromEvent, interval } from 'rxjs';
import { map, skip, takeUntil, takeWhile, tap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clicks$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    tap(() => console.log('tap antes del skip')),
    skip(1),
    tap(() => console.log('tap despues del skip')),
);

counter$.pipe(
    takeUntil(clicks$)
).subscribe(observer);
