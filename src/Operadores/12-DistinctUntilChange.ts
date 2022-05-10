import { Observer, of, fromEvent, interval, from } from 'rxjs';
import { distinct, distinctUntilChanged, map, skip, takeUntil, takeWhile, tap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const numeros$ = of(1, 1, 1, 1, 2, 3, 4, 5, 3, 3, 9, 1, 2, 6, 6, 3, 3, 4);
const personajes$ = from([
    {
        nombre: 'Aldo',
        edad: 23
    }, {
        nombre: 'Berto',
        edad: 34
    }, {
        nombre: 'Carmen',
        edad: 45
    }, {
        nombre: 'Aldo',
        edad: 50
    }, {
        nombre: 'Aldo',
        edad: 50
    }, {
        nombre: 'Martin',
        edad: 50
    }]);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(observer);

personajes$.pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(observer);