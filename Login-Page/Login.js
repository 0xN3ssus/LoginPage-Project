const ValidUser = 'N3ssus';
const ValidPass  = 'Pa$$w0rd';

function login () {
  let UserInput = document.getElementById('username').value;
  let PassInput = document.getElementById('password').value;

  if (UserInput === ValidUser && PassInput === ValidPass) {
    alert('Login successful!');
  } else {
    alert('Invalid credentials. Please try again.');
  }
}


