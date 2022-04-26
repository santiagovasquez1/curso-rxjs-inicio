
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    let interval = setInterval(() => {
        subscriber.next(Math.random());
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

/*
    1- Casteo múltiple: Distribuye la misma información a varios observables
    2- Tambien es un observer: recibe la información y la procesa
    3- Manejo Next, Error y Complete
    4- Permite transformar un cold observable en un hot observable
*/
const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1: ', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2: ', rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);