function createProfile() {
    // Retrieve the form data
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Create an object to store the profile data
    var profile = {
      name: name,
      phone: phone,
      dob: dob,
      email: email,
      password: password
    };
  
    // Store the profile data in local storage or send it to the server
    // ... your code here ...
  
    // Redirect to the profile page
    window.location.href = 'profile.html';
  }
  