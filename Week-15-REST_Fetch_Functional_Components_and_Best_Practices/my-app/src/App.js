import React from "react";
import "./App.css";
import House from "./house";

const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewRoom = this.addNewRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  render() {
    const houses = this.state
      ? this.state.house.map((house, index) =>
          console.log(
            "li 18 houses ",
            houses
          )(
            <House
              key={index}
              data={house}
              addNewRoom={this.addNewRoom}
              deleteRoom={this.deleteRoom}
            />
          )
        )
      : null;
    console.log("houses failed");
    return <div>{houses}</div>;
  }
  componentDidMount() {
    fetch(HOUSES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        console.log("li 36 data ", data);
        this.setState({
          houses: data,
        });
      });
  }
  deleteRoom(e, house, room) {
    const index = house.room.indexOf(room);
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
    house.room.push(room);
    updateHouse(house).then(() => {
      this.setState((state) => {
        for (let h of state.houses) {
          if (h.id === house._id) {
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
  return fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(house),
  });
}
