let button = $("#new-customer-btn");

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



  // .append($("<tr></tr>").val(
  //   ($("<td></td>").text(customerName)),
  //   ($("<td></td>").text(customerEmail)),
  //   ($("<td></td>").text(customerQty)),
  //   ($("<td></td>").text(customerRequest))))


  // ($("<td></td>").text(customerName)),
  // ($("<td></td>").text(customerEmail)),
  // ($("<td></td>").text(customerQty)),
  // ($("<td></td>").text(customerRequest))
  customerName = $("#new-customer-name").val("");
  customerEmail = $("#new-customer-email").val("");
  customerQty = $("#new-customer-qty").val("");
  customerRequest = $("#new-customer-request").val("");
})
