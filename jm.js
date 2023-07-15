document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the profile data from local storage
    var profileData = JSON.parse(localStorage.getItem("profile"));
  
    // Populate the profile page with the retrieved data
    if (profileData) {
      document.getElementById("name").textContent = profileData.name;
      document.getElementById("phone").textContent = profileData.phone;
      document.getElementById("dob").textContent = profileData.dob;
      document.getElementById("email").textContent = profileData.email;
    }
  
    // Add event listener to the edit button
    var editButton = document.getElementById("editButton");
    editButton.addEventListener("click", function() {
      // Redirect to the edit profile page
      window.location.href = "editprofile.html";
    });
  });
  