import { from, fromEvent, Observer, range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet at ante aliquam dapibus. Mauris nec porttitor felis. Mauris accumsan, sem quis auctor pellentesque, nisl ex hendrerit est, eu eleifend tortor turpis quis nunc. Morbi pulvinar, lorem vitae auctor hendrerit, dui nibh sodales augue, ultricies luctus lorem mauris dictum est. Sed imperdiet mi non eros iaculis ultricies. Proin ullamcorper lacus egestas eros pellentesque accumsan. Maecenas porttitor aliquet gravida. Donec vehicula sapien id sodales fermentum. Morbi sed erat vehicula ante sagittis gravida mattis quis lorem. Fusce dui nulla, suscipit eget rutrum sed, efficitur vitae ex. Donec quis scelerisque mauris. Vestibulum fringilla mauris sit amet tincidunt consequat. Suspendisse consectetur enim at dolor fringilla pretium.
<br><br>
Vestibulum fringilla mi eu gravida lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras volutpat sed lacus in blandit. Fusce porttitor nunc nec eleifend laoreet. Nunc gravida felis ligula, ut rhoncus mauris eleifend nec. Mauris pretium dignissim urna eget tincidunt. Donec gravida mauris tristique, egestas purus id, mollis eros. Morbi lobortis lacus dapibus orci elementum tempor. Vivamus egestas lorem nec volutpat efficitur. Suspendisse in urna elit. Nulla commodo vel metus vel sodales. Mauris pulvinar ex at est maximus condimentum. Donec molestie porttitor vulputate. Nam iaculis fringilla orci, eget volutpat erat imperdiet eu. Donec fermentum elit in velit auctor bibendum. Vestibulum nec lectus augue.
<br><br>
Nullam rutrum facilisis turpis non placerat. Donec vulputate, enim eu pretium consectetur, nisi massa sodales purus, ac finibus nisl felis vitae turpis. Curabitur id quam eget justo fringilla porta sed eget augue. Aliquam vulputate quam dictum, cursus leo ut, cursus justo. Integer vestibulum metus et pulvinar commodo. Fusce dapibus, magna vel volutpat feugiat, felis urna dapibus magna, nec fringilla mauris justo sed ligula. Nam molestie justo a diam rhoncus tempor. Praesent iaculis libero volutpat mauris porttitor dapibus. Nam velit tellus, posuere eget lobortis ac, tincidunt et urna. Fusce mollis arcu quis leo rutrum hendrerit. Integer venenatis dictum vulputate.
<br><br>
Etiam commodo ornare metus, vitae pharetra tortor dictum eget. Morbi tristique libero risus, vel ornare purus tempus ut. Nunc ultricies elit id mollis ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas urna justo, semper sed velit vel, aliquam rhoncus dui. Maecenas tortor odio, lacinia ac turpis non, ultricies maximus arcu. Nulla semper rutrum odio, vitae eleifend diam mattis quis. Etiam porttitor accumsan lectus, eget tincidunt nisi. Etiam nec elementum ex. Donec quam mauris, imperdiet vel nulla non, venenatis tempus arcu. Sed bibendum consequat erat quis laoreet. Cras non sapien vehicula, venenatis eros sed, dapibus justo. Donec consequat et elit quis fringilla.
<br><br>
Donec id urna lacus. Sed leo massa, venenatis non tincidunt nec, bibendum eu elit. Morbi convallis nunc nunc. Sed faucibus imperdiet risus, sit amet dignissim lectus sodales vitae. Ut sed orci in neque gravida pharetra. Vivamus laoreet euismod augue ac malesuada. Ut id pellentesque eros. Sed elementum sem magna, ut tempor ipsum consectetur at. Vestibulum malesuada aliquam nisl ut maximus. Donec quis libero lorem. Maecenas vel ipsum a lorem lobortis bibendum et quis turpis. Phasellus quis rutrum tellus. Sed finibus blandit molestie.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

//Funcion para hacer el calculo del porcentaje de la pagina
const getPercentage = (event: any) => {
    let {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    let porcentaje = (scrollTop / (scrollHeight - clientHeight)) * 100;
    return porcentaje;
}


//Streams

const scroll$ = fromEvent<Event>(document, 'scroll');

const progress$ = scroll$.pipe(
    map(x=>{
        return getPercentage(x);
    }),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});

