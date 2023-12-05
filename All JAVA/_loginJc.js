// Check if users array is stored in local storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Function to handle registration form submission
function registerUser(event) {
  event.preventDefault();

  // Get form values
  let name = document.querySelector("#register-username").value;
  let email = document.querySelector("#register-email").value;
  let password = document.querySelector("#register-password").value;

  // Create user object
  let user = {
    name: name,
    email: email,
    password: password
  };

  // Add user to users array
  users.push(user);

  // Store users array in local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Clear form
  document.querySelector("#register-form").reset();

  // Show login form
  login_show();

  // Display updated user list
  displayUsers();
}

// Function to handle login form submission
function loginUser(event) {
  event.preventDefault();

  // Get form values
  let email = document.querySelector("#login-username").value;
  let password = document.querySelector("#login-password").value;
  
  console.log("Email:", email);
  console.log("Password:", password);

  // Check if user exists
  let user = users.find(u => u.email === email && u.password === password);

  console.log("User:", user);

  if (user) {
    if (user.email === 'Admin@gmail.com' && user.password === '@admin') {
      // Redirect to admin page
      window.location.href = "see review.html";
    } else {
      // Redirect to dashboard page for non-admin users
      window.location.href = "Home Dashboard.html";
    }
  } else {
    alert("Invalid email or password");
  }

  

  // Clear form
  document.querySelector("#login-form").reset();
}


// Function to display user list
function displayUsers() {
  // Get user list element
  let userList = document.querySelector("#user-list");

  // Clear user list
  userList.innerHTML = "";

  // Loop through users array and add them to user list
  users.forEach(user => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Password: ${user.password}</p>
    `;
    userList.appendChild(div);
  });
}

// Add event listeners to forms
document.querySelector("#register-form").addEventListener("submit", registerUser);
document.querySelector("#login-form").addEventListener("submit", loginUser);

// Display user list on page load
displayUsers();



