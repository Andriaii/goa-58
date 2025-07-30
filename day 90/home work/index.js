/*1)მოვლენა (Event) არის ნებისმიერი ქმედება, რომელიც ხდება ვებგვერდზე,
მაგალითად: ღილაკზე დაკლიკება, ტექსტის შეყვანა, ფანჯრის ჩატვირთვა და ა.შ.

2)მოვლენის მსმენელი (Event Listener) არის ფუნქცია, რომელიც უსმენს გარკვეულ მოვლენას და მასზე რეაგირებს,
აგალითად, თუ მომხმარებელი დააჭერს ღილაკს, ფუნქცია შეიძლება ამოქმედდეს და გამოიტანოს შეტყობინება.*/



function calculateSum() {
    
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let sum = number1 + number2;
    
    
    console.log("Sum:", sum);
}


document.getElementById("sumBtn").addEventListener("click", calculateSum);