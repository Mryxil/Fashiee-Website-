let users = [];

// Check if any users are already saved in localStorage
if (localStorage.getItem('users')) {
  users = JSON.parse(localStorage.getItem('users'));
}

// Register new user
document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let username = document.getElementById('register-username').value;
  let password = document.getElementById('register-password').value;
  
  // Check if username is already taken
  if (users.find(user => user.username === username)) {
    alert('Username is already taken.');
    return;
  }

  users.push({username: username, password: password});
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful. Please login.');
  // Show login form
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('register-form').style.display = 'none';
});

// Login existing user
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let username = document.getElementById('login-username').value;
  let password = document.getElementById('login-password').value;
  
  // Check if username and password match a registered user
  let matchedUser = users.find(user => user.username === username && user.password === password);
  if (matchedUser) {
    alert('Login successful.');
    // Redirect to dashboard or homepage
    window.location.href = 'dashboard.html'; // or index.html
  } else {
    alert('Invalid username or password.');
  }
});
