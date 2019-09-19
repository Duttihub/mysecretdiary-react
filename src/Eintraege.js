import React, { Component } from 'react';
import './App.css';


class Eintraege extends Component {


  state = {
    eintraege: []
  };


  componentDidMount() {
    this.getEintraege();
  }

  getEintraege = _ => {
    fetch('http://localhost:3001/Eintraege')
      .then(response => response.json())
      .then(response => this.setState({ eintraege: response.data }))
      .catch(err => console.error(err))
  }

  render() {
    const { eintraege } = this.state;
    console.log(this.state);
    return (
      <div id="Eintraege">
        {eintraege.map(eintrag => (
          <section key={eintrag.Eintrag}>
            <p>{eintrag.Eintrag}</p>
          </section>
        ))}
      </div>
    );
  }
}
export default Eintraege;
