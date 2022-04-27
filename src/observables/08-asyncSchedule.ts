
import { Observer, asyncScheduler } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

//
const saludar = () => console.log('Hola mundo');
const saludar2 = (nombre: string) => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Juan');

//Programar el intervalo
const subs = asyncScheduler.schedule(function (state) {
    console.log('state: ', state);
    this.schedule(state + 5, 1000);
}, 1000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);


asyncScheduler.schedule(()=>subs.unsubscribe(), 6000);