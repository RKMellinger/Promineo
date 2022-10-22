// Initial creation for variables
let reservations = []
let customerCount = 2

// creates the JS links to the html buttons
let button = $("#new-customer-btn");
let editBtn = $("#editBtn")
let removeBtn = $("#removeBtn")


// mockapi link for the site/functions
let getPortURL = ('https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations')

// initial functions to collect and display information.
button.on('click', (event) => {
  event.preventDefault()
  //creaes JS elements for the HTML input.
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

  // Pushed the user data into the reservations array.
  reservations.push(customerCount, customerName, customerEmail, customerQty, customerRequest)

  //takes user data and creates the html table entry.
  let newEntry =
    `<tr><td>${customerName}</td><td>${customerEmail}</td><td>${customerQty}</td><td>${customerRequest}</td><td><button class="btn btn-primary" id="editBtn">Edit</button><button class="btn btn-danger" id="removeBtn">Delete</button></td></tr>`;
  $("#reservation-table").append(newEntry);
  customerCount++
  customerName = $("#new-customer-name").val("");
  customerEmail = $("#new-customer-email").val("");
  customerQty = $("#new-customer-qty").val("");
  customerRequest = $("#new-customer-request").val("");

})

// gets and pushes the mockAPI data into the reservations array.
function getAllRes() {
  return $.get(getPortURL).then((response) => { reservations.push(response) });
}

// reservations.table($("#reservation-table"))


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

getAllRes()