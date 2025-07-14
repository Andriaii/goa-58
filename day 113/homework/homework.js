// ფორმების არჩევა
const registrationForm = document.querySelector("#registration");
const signinForm = document.querySelector("#signin");

// მომხმარებლების სია
const users = [];

// სიმბოლოების ჯგუფები პაროლის ვალიდაციისთვის
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const punctuationChars = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

// ფუნქცია ამოწმებს, შეიცავს თუ არა პაროლი აუცილებელ კომპონენტებს
function isValidPassword(pass) {
    let hasAlphabet = false;
    let hasDigits = false;
    let hasPunctuation = false;

    for (let i = 0; i < pass.length; i++) {
        if (alphabet.includes(pass[i])) hasAlphabet = true;
        if (digits.includes(pass[i])) hasDigits = true;
        if (punctuationChars.includes(pass[i])) hasPunctuation = true;
    }

    return hasAlphabet && hasDigits && hasPunctuation;
}

// რეგისტრაციის ფორმაზე submit მოვლენის დამუშავება
registrationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // გვერდის განახლების თავიდან აცილება

    // ვამოწმებთ, უკვე ხომ არ არის რეგისტრირებული იმეილი
    const userExists = users.find(user => user.email === registrationForm.email.value);
    if (userExists) {
        alert("Email already registered");
        registrationForm.reset();
        return;
    }

    // პაროლის ვალიდაცია
    if (!isValidPassword(registrationForm.newPassword.value)) {
        alert("Password must contain at least one letter, one digit, and one punctuation mark");
        registrationForm.reset();
        return;
    }

    // პაროლის დამოწმება
    if (registrationForm.newPassword.value !== registrationForm.repeatPassword.value) {
        alert("Your repeated password is incorrect!");
        registrationForm.reset();
        return;
    }

    // ახალი მომხმარებლის ობიექტი
    const user = {
        email: registrationForm.email.value,
        pass: registrationForm.newPassword.value
    }

    users.push(user);      // ვამატებთ სიაში
    registrationForm.reset(); // ფორმის გასუფთავება
});






