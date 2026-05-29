

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting the default way

  // Get form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create a user object
  const user = {
      email: email,
      password: password
  };

  // Save to JSON file (for demonstration, we'll use localStorage)
  saveToJSON(user);

  // Send data to the backend
  sendToBackend(user);
});

function saveToJSON(user) {
  // Convert the user object to a JSON string
  const userJSON = JSON.stringify(user);

  // Save to localStorage (for demonstration purposes)
  localStorage.setItem('userData', userJSON);

  console.log('User data saved to JSON:', userJSON);
}

function sendToBackend(user) {
  // Simulate sending data to the backend
  fetch('/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('Login successful!');
  })
  .catch((error) => {
      console.error('Error:', error);
      alert('Login failed. Please try again.');
  });
}
