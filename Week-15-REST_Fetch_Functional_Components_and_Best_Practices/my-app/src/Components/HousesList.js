import React from "react";
import House from "./House";
import { housesApi } from "./HousesApi";

export default class HousesList extends React.Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.fetchHouses();
  }
  fetchHouses = async () => {
    const houses = await housesApi.get();
    this.setState({ houses });
  };
  updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    this.fetchHouses();
  };
  logHouse() {
    console.log(this.state.houses);
  }
  render() {
    console.log(this.state.houses);
    return (
      <div className="house-list">
        {this.state.houses.map((house) => (
          <div
            key={house._id}
            onChange={this.logHouse}>
            <House
              house={house}
              updateHouse={this.updateHouse}
            />
          </div>
        ))}
      </div>
    );
  }
}
