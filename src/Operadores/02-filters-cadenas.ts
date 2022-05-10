import { from, Observer, range } from 'rxjs';
import { filter, map, mapTo, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

/**
 * filter = filtra los valores que cumplan la condicion
 */

const personajes = [{
    tipo: 'heroe',
    nombre: 'Batman'
}, {
    tipo: 'heroe',
    nombre: 'Robin'
}, {
    tipo: 'villano',
    nombre: 'Joker'
}]

const source$ = range(1, 100);

const filter$ = source$.pipe(
    filter((value, index) => {
        if (value % 2 === 0) {
            console.log('pos: ', index);
            return true;
        }
    })
);

//Cadena de operadores
const heroes$ = from(personajes).pipe(
    filter(value => value.tipo === 'heroe'),
    map(value => `el heroe es ${value.nombre}`)
);

filter$.subscribe(observer);
heroes$.subscribe(observer);