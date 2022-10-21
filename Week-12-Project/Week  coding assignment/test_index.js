class Reservation {
  constructor(name,) {
    this.name = name;
    this.details = [];
  }

  addDetail(email, quantity, request) {
    this.details.push(new Detail(email, quantity, request));
  }
}

class Detail {
  constructor(email, quantity, request) {
    this.email = email;
    this.quantity = quantity;
    this.request = request
  }
}

class ReservationService {
  static url = 'https://63502b28df22c2af7b657cd0.mockapi.io/current/reservations';

  static getAllReservations() {
    return $.get(this.url);
  }

  static getReservation(id) {
    return $.get(this.url + `/${id}`);
  }

  static createReservation(reservation) {
    return $.post(this.url, reservation);
  }

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

  static deleteReservation(id) {
    return $.ajax({
      url: this.url + `/${id}`,
      type: 'DELETE'
    });
  }
}

class DOMManager {
  static reservations;

  static getAllReservations() {
    ReservationService.getAllReservations().then(reservations => this.render(reservations));
  }

  static createReservation(name) {
    ReservationService.createReservation(new Reservation(name))
      .then(() => {
        return ReservationService.getAllReservations();
      })
      .then((reservations) => this.render(reservations));
  }

  static deleteReservation(id) {
    ReservationService.deleteReservation(id)
      .then(() => {
        return ReservationService.getAllReservations();
      })
      .then((reservations) => this.render(reservations));
  }

  static addDetail(id) {
    for (let reservation of this.reservations) {
      if (reservation._id == id) {

        reservation.details.push(new Detail($(`#${reservation._id}-detail-email`).val(), $(`#${reservation._id}-detail-quantity`).val(), $(`#${reservation._id}-detail-request`).val()));

        ReservationService.updateReservation(reservation)
          .then(() => {
            return ReservationService.getAllReservations();
          })
          .then((reservation) => {
            console.log("This = " + reservations);
            this.render(reservations)
          });
      }
    }
  }

  static deleteDetail(reservationId, detailId) {
    for (let reservation of this.reservations) {
      if (reservation._id == reservationId) {
        for (let detail of reservation.details) {
          if (detail._id == detailId) {
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


  static render(reservations) {
    this.reservations = reservations;
    $('#reservation-table').empty();
    for (let reservation of reservations) {
      $('#reservation-table').prepend(
        `<div id="${reservation._id}" class="card">
                  <div class="card-header">
                      <h2>${reservation.name}</h2>
                      <button class="btn btn-warning" 
                      onclick="DOMManager.deleteReservation('${reservation._id}')">Delete</button>
                  </div>
                  <div class="card-body">
                      <div class="card">
                          <div class="row">
                              <div class="col-sm">
                                  <input type="text" id="${reservation._id}-detail-email" class="form-control"
                                  placeholder="Contact eMail">
                              </div>
                              <div class="col-sm">
                                  <input type="text" id="${reservation._id}-detail-quantity" class="form-control"
                                  placeholder="Number in Party">
                              </div>                          
                          </div>
                          <div class="row">
                            <div class="col-sm">
                            <input type="text" id="${reservation._id}-detail-request" class="form-control"
                            placeholder="Seating Request - Bar, Veranda, etc.">
                            </div>
                            <button id="${reservation._id}-new-detail" 
                              onclick="DOMManager.addDetail('${reservation._id}')" 
                              class="btn btn-success form-control">Add</button>
                          </div>
                      </div>
                  </div>
              </div><br>`
      );

      for (let detail of reservation.details) {
        $(`#${reservation._id}`).find('.card-body').append(
          `<p>
                      <span id="email-${detail._id}"><strong>eMail: </strong> ${detail.email}</span>
                      <span id="quantity-${detail._id}"><strong>quantity: </strong> ${detail.quantity}</span>
                      <span id="request-${detail._id}"><strong>Seating Request: </strong> ${detail.request}</span>
                      <button class="btn btn-warning" onclick="DOMManager.deleteDetail('${reservation._id}',
                      '${detail._id}')">Delete</button>
                  </p>`
        )
      }
    }
  }
};


$('#create-new-reservation').on('click', () => {
  DOMManager.createReservation($('#new-reservation-name').val());
  $('#new-reservation-name').val('');

});



DOMManager.getAllReservations();