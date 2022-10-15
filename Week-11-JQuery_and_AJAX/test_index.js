// html table with id of : customer-table

let customer_objects = [

  {

    firstName: "Sam",

    lastName: "Smith",

    email: "sam.smith@gmail.com"

  },

  {

    firstName: "Tom",

    lastName: "Jones",

    email: "tom.jones@gmail.com"

  }
]


customer_objects.forEach(function (item) {
  $('tbody').append('<tr><td>' + item.firstName + '</td><td>' + item.lastName + '</td><td>' + item.email + '</td></tr>')
});