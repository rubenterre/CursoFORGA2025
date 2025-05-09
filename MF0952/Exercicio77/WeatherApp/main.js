//Service Worker

if('serviceWorker' in navigator){
    console.log('Puedes usar los serviceWorker en tu navegador')

    navigator.serviceWorker.register('./sw.js')
        .then(res => console.log( 'serviceWorker cargado correctamente', res))
        .catch(err => console.log( 'serviceWorker No ha cargado correctamente', err));

}else{
    console.log('NO puedes usar los serviceWorker en tu navegador')

}