import React, { Component } from 'react';
import './App.css';
import styles from './eintragtabelle.module.css';
import style from './addeintrag.module.css';



class GetaMate extends Component {


  state = {
    eintraegemate: [],
    adding: {
      eintragnew: '',
      titelnew: ''
    }
  };


  componentDidMount() {
    this.getEintraegeGetaMate();
  }

  getEintraegeGetaMate = _ => {
    fetch('http://localhost:3001/GetaMate')
      .then(response => response.json())
      .then(response => this.setState({ eintraegemate: response.data }))
      .catch(err => console.error(err))
  }

  addMate = _ => {
    const { adding } = this.state;
    fetch(`http://localhost:3001/GetaMate/add?titelnew=${adding.titelnew}&eintragnew=${adding.eintragnew}`)
      .catch(err => console.error(err))
  };

  render() {
    const { eintraegemate } = this.state;
    const { adding } = this.state;

    console.log(this.state);
    return (

      <div className="GetaMate">
        <h1>Get a Mate and make a Date</h1>
        <p>Du willst was machen, aber all deine Pfeifenfreunde müssen Paar-Time haben und arbeiten?</p>
        <p>Scheiß drauf und treffe neue Leute aus der Community</p>

        <div id="Eintraege-GetaMate">

          <table className={styles.eintragtabelle}>

            <th className={styles.theintragtabelle}>Titel</th>
            <th className={styles.theintragtabelle}>Eintrag</th>
            <th className={styles.theintragtabelle} >Bearbeiten</th>
            <th className={styles.theintragtabelle} >Löschen</th>

            <tbody>
              {eintraegemate.map(eintrag => (
                <tr key={eintrag.Eintrag}>
                  <td className={styles.tdeintragtabelle} ref={eintrag.Titel}>{eintrag.Titel}</td>
                  <td className={styles.tdeintragtabelle}>{eintrag.Eintrag}</td>
                  <td className={styles.tdeintragtabelle}><button>bearbeiten</button></td>
                  <td className={styles.tdeintragtabelle}><button type="submit"  >löschen</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <form>
            <label className={style.inputlabel} >Titel</label>
            <input className={style.inputtitel} type="text" name="titelnew" value={adding.titelnew} onChange={e => this.setState({ adding: { ...adding, titelnew: e.target.value } })} />
          </form>
          <form>
            <label className={style.inputlabel} >Say "Hi" to your Mates </label>
            <textarea className={style.inputeintrag} type="text" name="eintragnew" value={adding.eintragnew} onChange={e => this.setState({ adding: { ...adding, eintragnew: e.target.value } })} />
            <button type="submit" onClick={this.addMate}>Eintrag hinzufügen</button>
          </form>

        </div>
      </div>
    );
  }
}
export default GetaMate;
