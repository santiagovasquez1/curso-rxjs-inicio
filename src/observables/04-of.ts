
import { Observable, Observer, of } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

//Funciones para crear observables
//Of : crea un observable a partir de un array, se emite cada valor del array de manera sincrona  

console.log('Inicio');
// const of$ = of(1, 2, 3, 4, 5);
// const of$ = of(...[1, 2, 3, 4, 5]);
const of$ = of([1,2],{a:1,b:2},function(){
    console.log('Funcion');
},true,Promise.resolve(true));


of$.subscribe(observer);
console.log('Fin');