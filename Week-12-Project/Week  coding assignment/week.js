// Initial creation for variables

let button = $("#new-customer-btn");
let editBtn = $("#editBtn")
let removeBtn = $("#removeBtn")
let reservations = []
let customerCount



// mockapi link and variables for the site/functions
let getPortURL = ('https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations')



let tableServer = $(reservations).on("load", () => {
  for (var i = 0; i < reservations.length; i++) {
    newEntry += `<tr><td> ${reservations[i].customerCount}</td><td>${reservations[i].customerName}</td><td>${reservations[i].customerEmail}</td><td>${reservations[i].customerQty}</td><td>${reservations[i].customerRequest}</td><td><button class='btn btn-primary' id='editBtn'>Edit</button><button class='btn btn-danger' id='removeBtn'>Delete</button></td></tr>`;
  }
});
// initial functions to collect and display information.
button.on('click', (event) => {
  event.preventDefault()

  let customerName = $("#new-customer-name").val();
  let customerEmail = $("#new-customer-email").val();
  let customerQty = $("#new-customer-qty").val();
  let customerRequest = $("#new-customer-request").val();

  //Console logs to confirm data.
  console.log(customerCount);
  console.log(customerName);
  console.log(customerEmail);
  console.log(customerQty);
  console.log(customerRequest);
  console.log(reservations);

  reservations.push(customerCount, customerName, customerEmail, customerQty, customerRequest)

  let newEntry =
    `<tr><td>${customerName} </td><td>${customerEmail}</td><td>${customerQty}</td><td>${customerRequest}</td><td><button class="btn btn-primary" id="editBtn">Edit</button><button class="btn btn-danger" id="removeBtn">Delete</button></td></tr>`;
  $("#reservation-table").append(newEntry);
  customerCount++
  customerName = $("#new-customer-name").val("");
  customerEmail = $("#new-customer-email").val("");
  customerQty = $("#new-customer-qty").val("");
  customerRequest = $("#new-customer-request").val("");


})


function getAllRes() {
  return $.get(getPortURL).then((response) => { reservations.push(response) });
}

getAllRes()
// function getMyRes(id) {
//   return $.get(this.url + `/${id}`);
// }
// function createRes(house) {
//   return $.post(this.url, house);
// }



// editBtn.on('click', (event) => {
//   event.preventDefault()
// })

// removeBtn.on('click', (event) => {
//   event.preventDefault()

// })
