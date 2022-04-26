
import { Observable, Observer, fromEvent } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

//Funciones para crear observables
//fromEvent: crea un observable a partir de un evento del DOM
const title = document.querySelector('h1');

const src1$ = fromEvent<MouseEvent>(title, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const subs1 = src1$.subscribe(observer);
const subs2 = src2$.subscribe({
    next: event=>{
        console.log(event.key);
    }
});