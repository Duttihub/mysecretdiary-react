import React, { Component } from 'react';
import './App.css';
import {
    withRouter
} from 'react-router-dom'


class EintragBearbeiten extends Component {

    state = { eintrag: { ID: 0, Titel: "", Eintrag: "" } }

    async componentDidMount() {
        const resp = await fetch(`http://localhost:3001/get/${this.props.match.params.id}`);
        const jsonResp = await resp.json();
        console.log(jsonResp.data[0]);

        this.setState({
            eintrag: {
                ID: jsonResp.data[0].ID,
                Titel: jsonResp.data[0].Titel,
                Eintrag: jsonResp.data[0].Eintrag
            }
        })
    }

    speichern(eintrag) {
        console.log(eintrag);
        fetch(`http://localhost:3001/edit?id=${eintrag.ID}&titelnew=${eintrag.Titel}&eintragnew=${eintrag.Eintrag}`)
            .then(() => {
                console.log('test');
                this.props.history.push(`/DrChaos`)
            })
            .catch(err => console.error(err))


    }

    render() {

        const { eintrag } = this.state;
        return (
            <div>
                <input type="text" value={eintrag.Titel} onChange={e => this.setState({ eintrag: { ...eintrag, Titel: e.target.value } })}></input>
                <textarea value={eintrag.Eintrag} onChange={e => this.setState({ eintrag: { ...eintrag, Eintrag: e.target.value } })}></textarea>
                <button onClick={() => { this.speichern(eintrag) }}>Speicher</button>
            </div>
        )
    }


}
export default withRouter(EintragBearbeiten);
