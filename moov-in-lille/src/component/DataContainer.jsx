import React from "react";
import axios from "axios";
import MyMap from "./MyMap";
import RightPanel from "./RightPanel";

class DataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      users: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&rows=223"
      )
      .then(res => {
        this.setState({
          stations: res.data.records
        });
      });
    axios.get("http://localhost:4040/utilisateurs").then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <MyMap
          stations={this.state.stations}
          clickItinerary={this.props.clickItinerary}
          clickFavorites={this.props.clickFavorites}
          users={this.state.users}
          identity={this.props.identity}
        />
        <RightPanel
          clickItinerary={this.props.clickItinerary}
          clickFavorites={this.props.clickFavorites}
          stations={this.state.stations}
          users={this.state.users}
          identity={this.props.identity}
        />
      </React.Fragment>
    );
  }
}

export default DataContainer;
