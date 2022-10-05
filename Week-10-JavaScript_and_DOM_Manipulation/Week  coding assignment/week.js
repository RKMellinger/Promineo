let button = document.getElementById("new-customer-btn");

button.addEventListener('click', (event)=>{
  event.preventDefault()
  let customerName = document.getElementById("new-customer-name").value;
  let customerEmail = document.getElementById("new-customer-email").value;
  let customerComment = document.getElementById("new-customer-comment").value;
  console.log(customerName);
  console.log(customerEmail)
  console.log(customerComment)
  let t = document.getElementById("comment-table")
  let tr = document.createElement("tr")
  let td = document.createElement('td')
  td.innerText = customerName
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
