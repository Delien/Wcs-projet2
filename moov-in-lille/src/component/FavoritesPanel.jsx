import React from 'react';
import '../App.scss';
import axios from 'axios';

class FavoritesPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        axios
        .get(`http://localhost:5050/utilisateurs?abonne=${this.props.identity}`)
        .then(res => {
            this.setState({
                user: res.data,
            });  
        });
    }
    render() {
        return(
            this.state.user.map((usr) => {
                return(
                    usr.favoris.map((fav,i) => {
                        return(
                            <div key={i}>
                                <h4>{fav.emplacement}</h4>
                                {
                                    this.props.stations.filter((station) => {
                                        return station.fields.nom === fav.nom;
                                    }).map((station, i) => {
                                        return(
                                            <React.Fragment key={i}>
                                                {console.log(this.state.user[i])}
                                                <p>{station.fields.nom}</p>
                                                <p>{station.fields.adresse}</p>
                                                <p>{station.fields.nbvelosdispo} vélo, {station.fields.nbplacesdispo} places</p>
                                            </React.Fragment>
                                        ) 
                                    })
                                }
                            </div>
                        )
                    })  
                )
                
            })
        )
    }
}

export default FavoritesPanel;