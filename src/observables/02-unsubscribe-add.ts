import { count, Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    let contador = 0;
    let interval = setInterval(() => {
        //next es el valor que se va a enviar al observer
        contador++;
        subscriber.next(contador);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    ///Evitar la fuga de memoria, limpiar el intervalo, se ejecuta cuando se cancela la subscripcion o se completa el observable
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscribtion = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

//Encadenamiento de subscripciones
subscribtion.add(subs2.add(subs3));
    

setTimeout(() => {
    subscribtion.unsubscribe();
    // subscribtion.unsubscribe();
    // subscribtion.unsubscribe();

    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Se han cancelado todas las subscripciones');
}, 5000);
