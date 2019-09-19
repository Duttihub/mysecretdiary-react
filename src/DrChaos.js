import React, { Component } from 'react';
import './App.css';
import styles from './eintragtabelle.module.css';
import style from './addeintrag.module.css';
import { Link } from 'react-router-dom';
import {
  withRouter
} from 'react-router-dom'



class DrChaos extends Component {


  state = {
    eintraegedrchaos: [],
    adding: {
      eintragnew: '',
      titelnew: ''
    },
    deleteit: {
      titeldelete: ''
    }
  };


  componentDidMount() {
    this.getEintraegeDrChaos();
  }
  getEintraegeDrChaos = _ => {
    fetch('http://localhost:3001/DrChaos')
      .then(response => response.json())
      .then(response => this.setState({ eintraegedrchaos: response.data }))
      .catch(err => console.error(err))
  }

  addChaos = _ => {
    const { adding } = this.state;
    fetch(`http://localhost:3001/DrChaos/add?titelnew=${adding.titelnew}&eintragnew=${adding.eintragnew}`)
      .catch(err => console.error(err))
  };

  delete = (id) => {
    const { adding } = this.state;
    fetch(`http://localhost:3001/DrChaos/delete?id=${id}`)
      .catch(err => console.error(err))
    this.getEintraegeDrChaos();
  }

  edit = (id) => {
    this.props.history.push(`/update/${id}`)
  }


  render() {
    const { eintraegedrchaos } = this.state;
    const { adding } = this.state;
    const { deleteit } = this.state;

    return (



      <div className="DrChaos-Component">
        <h1>Dr. Chaos bei Herzschmerz und Verwirrungssymptomen</h1>
        <p>Du hast Herzschmerz, oder bist einfach eine null in Sachen Kommunikation in Love Affairs?</p>
        <p>Keine Angst, du bist nicht allein! Dr. Chaos wird dich gesund machen!</p>

        <div id="Eintraege-DrChaos">

          <table className={styles.eintragtabelle}>

            <th className={styles.theintragtabelle}>Titel</th>
            <th className={styles.theintragtabelle}>Eintrag</th>
            <th className={styles.theintragtabelle} >Bearbeiten</th>
            <th className={styles.theintragtabelle} >Löschen</th>

            <tbody>
              {eintraegedrchaos.map(eintrag => (
                <tr key={eintrag.Eintrag}>
                  <td className={styles.tdeintragtabelle} ref={eintrag.Titel}>{eintrag.Titel}</td>
                  <td className={styles.tdeintragtabelle}>{eintrag.Eintrag}</td>
                  <td className={styles.tdeintragtabelle}><button onClick={() => { this.edit(eintrag.ID) }}>bearbeiten</button></td>
                  <td className={styles.tdeintragtabelle}><button onClick={() => { this.delete(eintrag.ID) }}>löschen</button></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
        <div>
          <form>
            <label className={style.inputlabel}>Titel</label>
            <input className={style.inputtitel} type="text" name="titelnew" value={adding.titelnew} onChange={e => this.setState({ adding: { ...adding, titelnew: e.target.value } })} />
          </form>
          <form>
            <label className={style.inputlabel}>Was musst du Dr. Chaos fragen? </label>
            <textarea className={style.inputeintrag} type="text" name="eintragnew" value={adding.eintragnew} onChange={e => this.setState({ adding: { ...adding, eintragnew: e.target.value } })} />
            <button type="submit" onClick={this.addChaos}>Eintrag hinzufügen</button>
          </form>

        </div>
      </div>

    );
  }
}
export default withRouter(DrChaos);
