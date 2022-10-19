let button = document.getElementById("new-customer-btn");

button.addEventListener('click', (event) => {
  event.preventDefault()
  let customerName = document.getElementById("new-customer-name").value;
  let customerEmail = document.getElementById("new-customer-email").value;
  let customerQty = document.getElementById("new-customer-qty").value;
  let customerRequest = document.getElementById("new-customer-request").value;
  console.log(customerName);
  console.log(customerEmail)
  console.log(customerQty);
  console.log(customerRequest)
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
  td.innerText = customerQty
  tr.appendChild(td)
  td = document.createElement('td')
  td.innerText = customerRequest
  tr.appendChild(td)
  customerName = document.getElementById("new-customer-name").value = "";
  customerEmail = document.getElementById("new-customer-email").value = "";
  customerQty = document.getElementById("new-customer-qty").value = "";
  customerRequest = document.getElementById("new-customer-request").value = "";
})
