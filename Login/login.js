const loginForm = document.querySelector("form");
const togglePassword = document.getElementById("togglePassword");

// Toggle password visibility
togglePassword?.addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  const icon = this.querySelector("i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // Show password
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
});

loginForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("❌ Please enter both username and password");
    return;
  }

  if (password.length < 6) {
    alert("❌ Password must be at least 6 characters");
    return;
  }

  localStorage.setItem("username", username); // Store username
  alert(`✔️ Welcome, ${username}! Your login was successful.`);
  window.location.href = "../Home/home.html";
});
