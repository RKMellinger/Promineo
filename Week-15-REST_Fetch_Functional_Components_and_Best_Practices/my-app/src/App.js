import React, { Component } from "react";
import House from "./Components/House";

const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.addNewRoom = this.addNewRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  render() {
    const houses = this.state
      ? this.state.houses.map((house, index) => (
          <House
            key={index}
            data={house}
            addNewRoom={this.addNewRoom}
            deleteRoom={this.deleteRoom}
          />
        ))
      : null;
    return <div>{houses}</div>;
  }
  componentDidMount() {
    fetch(HOUSES_ENDPOINT)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ houses: data });
      });
  }
  deleteRoom(e, house, room) {
    const index = house.rooms.indexOf(room);
    house.rooms.splice(index, 1);
    updateHouse(house).then(() => {
      this.setState((state) => {
        for (let h of state.houses) {
          if (h._id === house._id) {
            let h = house;
            break;
          }
        }
        return state;
      });
    });
    e.preventDefault();
  }
  addNewRoom(e, house, room) {
    house.rooms.push(room);
    updateHouse(house).then(() => {
      this.setState((state) => {
        for (let h of state.houses) {
          if (h._id === house._id) {
            let h = house;
            break;
          }
        }
        return state;
      });
    });
    e.preventDefault();
  }
}
function updateHouse(house) {
  fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(house),
  });
}
