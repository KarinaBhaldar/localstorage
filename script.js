document.addEventListener("DOMContentLoaded", function() {
    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Populate table with user data
    const userTable = document.getElementById("userTable");
    const tbody = userTable.querySelector("tbody");
  
    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.mobileno}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
      `;
      tbody.appendChild(row);
    });
  });