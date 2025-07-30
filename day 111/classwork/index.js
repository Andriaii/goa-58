document.getElementById("textForm").addEventListener("submit", function (e) {
  e.preventDefault(); // გვერდის გადატვირთვა არ მოხდეს

  const inputValue = document.getElementById("userInput").value.trim();
  if (inputValue === "") {
    alert("Please type something!");
    return;
  }

  console.log("User input:", inputValue);
});
