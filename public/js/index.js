const socket = io('https://socket-server-kevin.herokuapp.com/');

const input = document.getElementById('input');
const form = document.getElementById('form');
const list = document.getElementById('list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const value = input.value;
  socket.emit('message-of-client', { message: value });
});

socket.on('message-of-server', ({ message }) => {
  list.innerHTML += `<li class="list-group-item">${ message }</li>`;
  input.value = '';
});
