const MyObject = {
    nesto: 77
}


MyObject.nesto 


let playerOne = {
    name: "Adnan",
    age: 55
}

function printName () {
console.log(playerOne.name)
}

printName();


function Book (title, author, pages, hasread){
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasread
    this.info = function () {
        console.log(title, author, pages, hasread)
    }
}


const Book1 = new Book ('Dostojevski', 'Rat i mir', 986, 'not read yet')

Book1.info();

