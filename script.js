const closeButtonAddBookWindow = document.querySelector("#close-button")
const addNewBookButton = document.querySelector("#table-footer-icons-book")
const addBookSubmit = document.querySelector('#add-book-button')
const closeButtonEditWindow = document.querySelector("#edit-close-button")

closeButtonAddBookWindow.addEventListener('click', function(){
    document.getElementById("add-book-window").style.display = 'none'

})
closeButtonEditWindow.addEventListener('click', function(){
    document.getElementById("edit-book-window").style.display = 'none'

})
addNewBookButton.addEventListener('click',function(){
    document.getElementById("add-book-window").style.display = 'block' 
})





addBookSubmit.addEventListener('click',function(){
   const newTitle= document.getElementById('new-title').value ;
   const newAuthor = document.getElementById('new-author').value
   const newPages = document.getElementById('new-pages').value
   const newPublished = document.getElementById('new-published').value
   const newAcquired = document.getElementById('new-acquired').value
   const newStatus = document.getElementById('new-status').value
  
   const getTable= document.getElementById('table');
    createNewRow = document.createElement('tr');
    getTable.appendChild(createNewRow);
    
th1 = document.createElement('th');
th1.innerHTML = '<input type="checkbox" name="" id="">';

th2 = document.createElement('th');
th2.innerHTML = `${newTitle}`;
th3 = document.createElement('th');
th3.innerHTML = `${newAuthor}`;

th4 = document.createElement('th');
th4.innerHTML = `${newPages}`;

th5 = document.createElement('th');
th5.innerHTML = `${newPublished}`;

th6 = document.createElement('th');
th6.innerHTML = `${newAcquired}`;

th7 = document.createElement('th');
th7.innerHTML = `<a id="status" href="">${newStatus}</a>`;

th8 = document.createElement('th');
th8.innerHTML = '<button class="table-icons" > <img src="./images/delete.png" alt=""> </button><button  class="table-icons" >  <img src="./images/edit.png" alt=""> </button>';



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
document.getElementById('new-author').value = ''
document.getElementById('new-pages').value = ''
document.getElementById('new-published').value = ''
document.getElementById('new-acquired').value = ''
document.getElementById('new-status').value = ''
    
 })
    
const editButton1 = document.getElementById('edit-book1')
editButton1.addEventListener('click', function(){
    
    document.getElementById("edit-book-window").style.display = 'block'

    
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

