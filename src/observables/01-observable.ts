
import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const first$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');
    subscriber.complete();

    subscriber.next('Hola');
    subscriber.next('Mundo');
});

const timer$ = new Observable<number>(subscriber => {
    let count = 0;
    const interval = setInterval(() => {
        subscriber.next(count);
        count++;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        subscriber.complete();
    }, 10000);
});


first$.subscribe(
    {
        next: value => console.log(value),
        error: error => console.log(error),
        complete: () => console.log('complete')
    }
);

const prueba = function (value: string) {
    return new Observable<string>(subscriber => {
        subscriber.next(value);
        subscriber.complete();
    });
}

prueba('Hola').subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('complete')
});

first$.subscribe(observer);