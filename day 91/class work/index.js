/*1)functions - ფუნქცია არის კოდის ბლოკი რომელიც ასრულებს რაიმე ამოცანას და ფუნქციით ჩვენ შეგვიძლია გავამარტივოთ კოდი

  2)scopes - ფარგლები განსაზღვრავს, თუ რომელი ცვლადი საიდან არის ხილვადი და როდის ქრება მეხსიერებიდან
  
  3)local variable - ცვლადი, რომელიც შექმნილია ფუნქციის შიგნით და მხოლოდ იქ არის ხელმისაწვდომი.
  
  4)global variable - ცვლადი, რომელიც შექმნილია ფუნქციის გარეთ და მთელ პროგრამაში ჩანს.*/ 

//1)
        function greet(){
            console.log('hello')
        } 

        greet()

//2)

function sayHello(name){
    console.log(`hello ${name}`)
}

sayHello(anna)


//3)

function beFit(age , muscle){
    age = prompt('enter ur age')
    muscle = prompt('enter ur muscle level out of ten')
}

beFit()

//4)

let age = 12
