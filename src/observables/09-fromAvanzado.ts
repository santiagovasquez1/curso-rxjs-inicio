
import { Observer, of, from } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

/**
 * Of = toma argumentos y los emite
 * from = toma una fuente de datos y los emite
 */


// const source$ = from([1, 2, 3, 4, 5, 6]);

// Trabajo con peticiones http
// const source$ = from(
//     fetch('https://api.github.com/users/santiagovasquez1')
// )

// source$.subscribe({
//     next: async value => {
//         let body = await value.json();
//         console.log(body);
//     }
// });

const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

const source$ = from(myGenerator());
source$.subscribe(observer);
