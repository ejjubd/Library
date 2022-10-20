const closeButton = document.querySelector("#close-button")
const addNewBookButton = document.querySelector("#table-footer-icons-book")
const addBookSubmit = document.querySelector('#add-book-button')

closeButton.addEventListener('click', function(){
    document.getElementById("add-book-window").style.display = 'none'

})

addNewBookButton.addEventListener('click',function(){
    document.getElementById("add-book-window").style.display = 'block' 
})





addBookSubmit.addEventListener('click',function(){
   const newTitle= document.getElementById('new-title').value ;
    const getTable= document.getElementById('table');
    createNewRow = document.createElement('tr');
    getTable.appendChild(createNewRow);
    
th1 = document.createElement('th');
th1.innerHTML = '<input type="checkbox" name="" id="">';

th2 = document.createElement('th');
th2.innerHTML = `${newTitle}`;
th3 = document.createElement('th');
th3.innerHTML = 'Title';

th4 = document.createElement('th');
th4.innerHTML = 'Title';

th5 = document.createElement('th');
th5.innerHTML = 'Title';

th6 = document.createElement('th');
th6.innerHTML = 'Title';

th7 = document.createElement('th');
th7.innerHTML = '<a id="status" href="">Read</a>';

th8 = document.createElement('th');
th8.innerHTML = '<a class="table-icons" href=""><img src="./images/delete.png" alt=""></a><a class="table-icons" href=""><img src="./images/edit.png" alt=""></a>';



createNewRow.appendChild(th1);
createNewRow.appendChild(th2);
createNewRow.appendChild(th3);
createNewRow.appendChild(th4);
createNewRow.appendChild(th5);
createNewRow.appendChild(th6);
createNewRow.appendChild(th7);
createNewRow.appendChild(th8);
   
document.getElementById("add-book-window").style.display = 'none' 
document.getElementById('new-title').value = ''  

    
 })
    

function Book (title, author, pages, hasread){
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasread
    this.info = function () {
        console.log(title, author, pages, hasread)
    }
}

const Book1 = new Book ('Dostojevski', 'Rat i mir', 986, 'not read yet');

Book1.info();



















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




Book1.info();

