import { Observer, of, fromEvent, interval, from } from 'rxjs';
import {  distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

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

personajes$.pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(observer);