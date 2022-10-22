//Template for reservations and adding the details to the array.
class Reservation {
  constructor(name,) {
    this.name = name;
    this.details = [];
  }

  addDetail(email, quantity, request) {
    this.details.push(new Detail(email, quantity, request));
  }
}

//Template for the reservation details
class Detail {
  constructor(email, quantity, request) {
    this.email = email;
    this.quantity = quantity;
    this.request = request
  }
}
// Houses all of the CRUD to API base functions
class ReservationService {
  static url = 'https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations';

  // Pulls all API data from API site
  static getAllReservations() {
    return $.get(this.url);
  }

  //gets specific reservation data from api
  static getReservation(_id) {
    return $.get(this.url + `/${_id}`);
  }
  //Pushes new reservation to API
  static createReservation(reservation) {
    return $.post(this.url, reservation);
  }
  // Connects update information to API
  static updateReservation(reservation) {
    console.log(JSON.stringify(reservation));
    return $.ajax({
      url: this.url + `/${reservation._id}`,
      dataType: 'json',
      data: JSON.stringify(reservation),
      contentType: 'application/json',
      type: 'PUT'
    });
  }

  //Removes the reservation from API
  static deleteReservation(_id) {
    return $.ajax({
      url: this.url + `/${_id}`,
      type: 'DELETE'
    });
  }
}

//Runs the various CRUD operations for created entries
class DOMManager {
  static reservations;

  //Pulls reservation information from API
  static getAllReservations() {
    ReservationService.getAllReservations().then(reservations => this.render(reservations));
  }

  //Creates user reservation
  static createReservation(name) {
    ReservationService.createReservation(new Reservation(name))
      .then(() => {
        return ReservationService.getAllReservations();
      })
      .then((reservations) => this.render(reservations));
  }
  // Deletes the whole reservation
  static deleteReservation(_id) {
    ReservationService.deleteReservation(_id)
      .then(() => {
        return ReservationService.getAllReservations();
      })
      .then((reservations) => this.render(reservations));
  }

  //Updates the reservation data
  static addDetail(id) {
    for (let reservation of this.reservations) {
      if (reservation._id == id) {
        reservation.details.push(new Detail($(`#${reservation._id}-detail-email`).val(), $(`#${reservation._id}-detail-quantity`).val(), $(`#${reservation._id}-detail-request`).val()));
        ReservationService.updateReservation(reservation)
          .then(() => {
            return ReservationService.getAllReservations();
          })
          .then((reservations) => {
            this.render(reservations)
          });
      }
    }
  }

  //removes user inputted data from the reservation
  static deleteDetail(reservationId, detailId) {
    for (let reservation of this.reservations) {
      if (reservation._id == reservationId) {
        for (let detail of reservation.details) {
          if (detail.id == detailId) {
            reservation.details.splice(reservation.details.indexOf(detail), 1);
            ReservationService.updateReservation(reservation)
              .then(() => {
                return ReservationService.getAllReservations();
              })
              .then((reservations) => this.render(reservations));
          }
        }
      }
    }
  }

  //renders and creates the information form mockAPI site to the page.
  static render(reservations) {
    this.reservations = reservations;
    $('#reservation-table').empty();
    for (let reservation of reservations) {
      $('#reservation-table').prepend(
        `<div id="${reservation._id}" class="card">
  <div class="card-header">
    <h2>${reservation.name}</h2>
    <button class="btn btn-warning" onclick="DOMManager.deleteReservation('${reservation._id}')">Delete</button>
  </div>
  <div class="card-body">
    <div class="card">
      <div class="row">
        <div class="col-sm">
          <input type="text" id="${reservation._id}-detail-email" class="form-control" placeholder="Contact eMail">
        </div>
        <div class="col-sm">
          <input type="text" id="${reservation._id}-detail-quantity" class="form-control" placeholder="Number in Party">
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <input type="text" id="${reservation._id}-detail-request" class="form-control"
            placeholder="Seating Request - Bar, Veranda, etc.">
        </div>
        <button id="${reservation._id}-new-detail" onclick="DOMManager.addDetail('${reservation._id}')"
          class="btn btn-success form-control">Add</button>
      </div>
    </div>
  </div>
</div><br>`
      );
      //creates the extra information for the reservation, contact, number of guests, seating area.
      for (let details of reservation.details) {
        $(`#${reservation._id}`).find('.card-body').append(
          `<p>
                      <span id="${details.id}-email"><strong>eMail: </strong>${details.email}</span>
                      <span id="${details.id}-quantity"><strong>Number in party: </strong> ${details.quantity}</span>
                      <span id="${details.id}-request"><strong>Seating Request: </strong> ${details.request}</span>
                      <button class="btn btn-warning" onclick="DOMManager.deleteDetail('${reservation._id}',
                      '${details.id}')">Delete</button>
                  </p>`
        )
      }
    }
  }
};

// Runs the create reservation button nad runs it.
$('#create-new-reservation').on('click', () => {

  DOMManager.createReservation($('#new-reservation-name').val());
  $('#new-reservation-name').val('');

});



DOMManager.getAllReservations();