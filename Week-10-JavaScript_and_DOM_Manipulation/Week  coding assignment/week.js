class Post{
  constructor(customerName, customerEmail, customerComment){
    this.name=customerName
    this.email=customerEmail
    this.comment=customerComment
    this.array1 = []
      }
}
let postId = 0;
let customerPost = []

let button = document.getElementById("new-customer-btn");
// let customerName = document.getElementById("new-customer-name").value;
// let customerEmail = document.getElementById("new-customer-email").value;
// let customerComment = document.getElementById("new-customer-comment").value;


function onClick(id, action) {
  let element = document.getElementById(id);
  element.addEventListener("click", action);
  return element;
}

button.addEventListener('click', ()=>{
  let customerName = document.getElementById("new-customer-name").value;
  let customerEmail = document.getElementById("new-customer-email").value;
  let customerComment = document.getElementById("new-customer-comment").value;
  console.log(customerName.value);
  console.log(customerEmail.value)
  console.log(customerComment.value)
  let tr = document.createElement("tr")
  let td = document.createElement('td')
  td.innerText = customerName
  let t = document.getElementById("comment-table")
  t.appendChild(tr)
  tr.appendChild(td)
  td = document.createElement('td')
  td.innerText = customerEmail
  tr.appendChild(td)
  td = document.createElement('td')
  td.innerText = customerComment
  tr.appendChild(td)
customerName = document.getElementById("new-customer-name").value="";
customerEmail = document.getElementById("new-customer-email").value="";
customerComment = document.getElementById("new-customer-comment").value="";
} )


// document.getElementById("remove").addEventListener("click", () => {
//   let idToRemove = document.getElementById("remove-id").value;
//   let elementToRemove = document.getElementById(idToRemove);
//   elementToRemove.parentNode.removeChild(elementToRemove);
//   document.getElementById("remove-id").value = "";
// });

// 

// document.getElementById("add").addEventListener("click", () => {
//   var parent = document.getElementById("paragraphs");
//   var newElement = document.createElement("p");
//   newElement.innerHTML = document.getElementById("new-text").value;
//   newElement.setAttribute("id", id++);
//   parent.appendChild(newElement);
//   document.getElementById("new-text").value = "";
// });
// console.log(id);
