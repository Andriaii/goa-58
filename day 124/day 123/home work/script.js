import { store, get } from './localStorage.js';
import { User } from './user.model.js';

const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    alert("გთხოვ შეავსე ყველა ველი");
    return;
  }

  const newUser = new User(name, email, password);
  const users = get('users');

  users.push(newUser);
  store('users', users);

  alert('Რეგისტრაცია წარმატებით დასრულდა!');
  form.reset();
});
