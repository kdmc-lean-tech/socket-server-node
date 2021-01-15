const socket = io('https://socket-server-kevin.herokuapp.com/');

const message = document.getElementById('message');
const form = document.getElementById('form');
const list = document.getElementById('list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const value = message.value;
  socket.emit('message-of-client', { message: value });
});

socket.on('message-of-server', ({ message }) => {
  list.innerHTML += `<li class="list-group-item">${ message }</li>`;
});
