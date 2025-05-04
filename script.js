const newBookButton=document.getElementById("new_book");
const addBookDiv=document.querySelector(".add_book_div");
const xButton=document.querySelector(".x_sign");
const myLibrary=[];



function changeState()
{
    addBookDiv.style.display="flex";
}

xButton.addEventListener("click", ()=>{
    addBookDiv.style.display="none"
})

function Book(id,title,author,pages,readed){
    this.id=id;
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readed=readed;
}


function addBook(){
    const id=crypto.randomUUID();
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const pages=document.getElementById("pages").value;
    const readed=document.getElementById("readed").value;

    if(title!=="" && pages!=="" && author!==""){
        const book = new Book(id,title,author,pages,readed);
        myLibrary.push(book);
        displayLibrary();
    }
    
}

function displayLibrary(){
    const table=document.getElementById("table");
    const rowNumber=table.rows.length;
    for (let i=rowNumber-1; i>0; i--){
        table.deleteRow(i);
    }

    myLibrary.forEach((item)=>{
        const row=table.insertRow(-1);
        const cell1=row.insertCell(0);
        const cell2=row.insertCell(1);
        const cell3=row.insertCell(2);
        const cell4=row.insertCell(3);
        const cell5=row.insertCell(4);
    
        cell1.textContent=item.title;
        cell2.textContent=item.author;
        cell3.textContent=item.pages;
        cell4.textContent=item.readed;
        
        const x=document.createElement("p");
        x.textContent="X";
        x.classList.add("delete_book");
        cell5.appendChild(x);

        x.addEventListener('click', ()=>removeBook(item.id))

    })
    
}

function removeBook(bookId){
    const index=myLibrary.findIndex(checkId);
    function checkId(book){
        return book.id===bookId;
    }
    myLibrary.splice(index,1);
    displayLibrary();
    
}