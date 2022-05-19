// conenction
let socket = io();
window.onload = function() {

// DOM elements
let mivideo = document.getElementById('mivideo');
let IniciarPausar = document.getElementById('IniciarPausar');



IniciarPausar.addEventListener('click', function() {
  socket.emit('cliente:video', {
    IniciarPausar: IniciarPausar.value
    });
});

IniciarPausar.addEventListener('click', function() {
  if(mivideo.paused){
    mivideo.play();
    IniciarPausar.innerHTML = "Pausar";
    
  }else{
    mivideo.pause();
    IniciarPausar.innerHTML = "Iniciar";
  }
  });
}
 mivideo.addEventListener('timeupdate', function() {
    let tiempo = mivideo.currentTime / mivideo.duration * 100;
    Velocidad.value = tiempo;
});

document.querySelector('video').addEventListener('ended', function () {
  console.count('loop restart');
  this.play();
})


Velocidad.addEventListener('change', function() {
 let tiempo = Velocidad.value * mivideo.duration / 100;
 mivideo.currentTime = tiempo;
});
/* message.addEventListener('keypress', function () {
  socket.emit('chat:typing', username.value);
});

socket.on('chat:message', function(data) {
  actions.innerHTML = '';
  output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
  </p>`
});

socket.on('chat:typing', function(data) {
  actions.innerHTML =  `<p><em>${data} is typing a message...</em></p>`
}); */