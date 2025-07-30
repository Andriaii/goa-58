const users = []; // აქ შეინახება დარეგისტრირებული მომხმარებლები

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // ფორმის გადატვირთვა არ მოხდეს

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // 1. ვალიდაცია: ორი პაროლი უნდა ემთხვეოდეს
  if (password !== confirmPassword) {
    alert("❌ პაროლები არ ემთხვევა!");
    return;
  }

  // 2. ვალიდაცია: სიგრძე
  if (password.length < 5 || password.length > 20) {
    alert("❌ პაროლი უნდა იყოს 5-დან 20 სიმბოლომდე.");
    return;
  }

  // 3. ვალიდაცია: უნდა შეიცავდეს მინ. 1 ციფრს, 1 პუნქტუაციას და 1 ინგლისურ სიმბოლოს
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasPunctuation = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(password);

  if (!hasLetter || !hasDigit || !hasPunctuation) {
    alert(" პაროლი უნდა შეიცავდეს მინიმუმ 1 ლათინურ სიმბოლოს, 1 რიცხვს და 1 პუნქტუაციის ნიშნს.");
    return;
  }

  // წარმატებული რეგისტრაცია
  const newUser = {
    email: email,
    password: password // რეალურ პროექტში არ შეინახოთ plaintext!
  };

  users.push(newUser);
  alert("✅ რეგისტრაცია წარმატებით დასრულდა!");
  console.log("Users:", users);

  // ფორმის გასუფთავება
  document.getElementById("registrationForm").reset();
});

