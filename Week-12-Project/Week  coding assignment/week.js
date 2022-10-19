let button = $("#new-customer-btn");

// api link https://63502b28df22c2af7b657cd0.mockapi.io/current/

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
  let t = $("#reservation-table")
  let tr = $("#tr")
  let td = $('#td')
  td.text("#customerName").val
  t.append("#tr")
  tr.append("#td")
  td = $('#td')
  td.text("#customerEmail").val
  tr.append("#td")
  td = $('#td')
  td.text("#customerQty").val
  tr.append("#td")
  td = $('#td')
  td.text("#customerRequest").val
  tr.append("#td")
  customerName = $("#new-customer-name").val("");
  customerEmail = $("#new-customer-email").val("");
  customerQty = $("#new-customer-qty").val("");
  customerRequest = $("#new-customer-request").val("");
})
