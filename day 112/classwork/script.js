document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // არ ვაძლევთ ფორმას გადატვირთვის უფლებას

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // 1) შეამოწმე ცარიელი ველები
  if (email === "" || password === "") {
    alert("Please fill out all fields");
    return;
  }

  // 2) Email ვალიდაცია (მარტივი regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  if (!isEmailValid) {
    alert("Please enter a valid email address");
    return;
  }

  // 3) წარმატებული შეტყობინება
  console.log("Email:", email);
  console.log("Password:", password);

  // 4) ფორმის გასუფთავება
  document.getElementById("loginForm").reset();
});
