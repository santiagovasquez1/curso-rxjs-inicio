import { from, Observer, range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

/**
 * tap = dispara efectos secundarios 
 */
const numeros$ = range(1, 5);

//Tap no cambia el flujo de datos
numeros$.pipe(
    tap<number>(x => {
        console.log('antes', x);
        return 100;
    }),
    map<number, number>(valor => valor * 10),
    tap<any>({
        next: valor => console.log('despues', valor),
        complete: () => console.log('complete')
    })
).subscribe(valor => console.log('subs: ', valor));