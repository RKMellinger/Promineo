let button = $("#new-customer-btn");

var homePortURL = $.get('https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations')

button.on('click', (event) => {
  event.preventDefault()
  let customerName = $("#new-customer-name").val();
  let customerEmail = $("#new-customer-email").val();
  let customerQty = $("#new-customer-qty").val();
  let customerRequest = $("#new-customer-request").val();


  console.log(customerName);
  console.log(customerEmail)
  console.log(customerQty);
  console.log(customerRequest)

  let newEntry = `<tr><td>${customerName} </td><td>${customerEmail}</td><td>${customerQty}</td><td>${customerRequest}</td></tr>`;

  $("#reservation-table").append(newEntry);

  customerName = $("#new-customer-name").val("");
  customerEmail = $("#new-customer-email").val("");
  customerQty = $("#new-customer-qty").val("");
  customerRequest = $("#new-customer-request").val("");
})
