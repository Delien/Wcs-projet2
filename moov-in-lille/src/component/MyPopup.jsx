import React from "react";
import { Popup } from "react-leaflet";
import CircProgressBar from "./CircProgressBar";
import axios from "axios";

class MyPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteName: "",
      users: []
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  sendInfo() {
    axios
      .get(`http://localhost:4040/utilisateurs/?abonne=${this.props.identity}`)
      .then(res => {
        axios.post(`http://localhost:4040/utilisateurs`, {
          abonne: this.props.identity,
          favoris: [
            {
              emplacement: this.state.favoriteName,
              nom: this.props.station.fields.nom
            }
          ]
        });
      });
  }

  render() {
    const station = this.props.station;
    const lowerCaseTitle = station.fields.nom.charAt(0).toUpperCase();
    const captializeTitle = station.fields.nom.slice(1).toLowerCase();
    const title = lowerCaseTitle + captializeTitle;
    return (
      <Popup>
        <div className="row popup-container justify-content-center">
          <div className="col-12 text-center">
            <h5 className="m-0">{title}</h5>
          </div>
          <div className="my-3">
            <CircProgressBar stationSlider={this.props.station} />
          </div>
          <div>
            <form>
              <input
                type="text"
                id="favoriteName"
                name="favoriteName"
                placeholder="Notez le nom du favori"
                onChange={this.onChange}
                value={this.state.favoriteName}
              />
              <button
                type="button"
                className="okbutton"
                onClick={() => this.sendInfo()}
              >
                +
              </button>
            </form>
          </div>
        </div>
      </Popup>
    );
  }
}

export default MyPopup;
