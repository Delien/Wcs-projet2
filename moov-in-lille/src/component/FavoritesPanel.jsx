import React from "react";
import "../App.scss";
import axios from "axios";

class FavoritesPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4040/utilisateurs?abonne=${this.props.identity}`)
      .then(res => {
        this.setState({
          user: res.data
        });
      });
  }
  render() {
    return (
      <div className="allfavorite">
        {this.state.user.map(usr => {
          return usr.favoris.map((fav, i) => {
            return (
              <div key={i} className="favorites">
                <h4 className="titlefavorite">{fav.emplacement}</h4>
                {this.props.stations
                  .filter(station => {
                    return station.fields.nom === fav.nom;
                  })
                  .map((station, i) => {
                    return (
                      <React.Fragment key={i}>
                        <p>{station.fields.nom}</p>
                        <p>{station.fields.adresse}</p>
                        <p>
                          {station.fields.nbvelosdispo} vélo,{" "}
                          {station.fields.nbplacesdispo} places
                        </p>
                      </React.Fragment>
                    );
                  })}
              </div>
            );
          });
        })}
      </div>
    );
  }
}

export default FavoritesPanel;
