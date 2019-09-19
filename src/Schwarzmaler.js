import React, {Component} from 'react';
import './App.css';
import styles from './eintragtabelle.module.css';
import style from './addeintrag.module.css';


class Schwarzmaler extends Component {
    
   
  state = {
      eintraegeschwarzmaler: [],
      adding:{
        eintragnew: '',
        titelnew:''
      }
  };


componentDidMount() {
this.getEintraegeSchwarzmaler();
}
getEintraegeSchwarzmaler = _ => {
fetch('http://localhost:3001/Schwarzmaler')
.then(response=>response.json())
.then(response=>this.setState({eintraegeschwarzmaler: response.data}))
.catch(err=>console.error(err))
}

addSchwarzmaler = _ => {
  const {adding}= this.state;
 fetch(`http://localhost:3001/Schwarzmaler/add?titelnew=${adding.titelnew}&eintragnew=${adding.eintragnew}`) 
 .catch(err=>console.error(err))
 };



render() {
  const {eintraegeschwarzmaler}= this.state;
  const{adding} = this.state;
  console.log(this.state);
return (

  <div id="Schwarzmaler-Component">
      <h1>Seid Willkommen all Ihr Schwarzmaler und Sarkasten</h1>
    <p>Ist die Ausgeburt deines Schwarzenhumors auch für alle da draußen zu krass?</p>
    <p>Sei dir sicher hier ist deine Humor Comfortzone</p>
    <br></br>

    <div className= "Schwarzmaler-Eintraege">
    <table className={styles.eintragtabelle}>

<th className={styles.theintragtabelle}>Titel</th>
<th className= {styles.theintragtabelle}>Eintrag</th>
<th className={styles.theintragtabelle} >Bearbeiten</th>
<th className={styles.theintragtabelle} >Löschen</th>

<tbody>
{eintraegeschwarzmaler.map(eintrag =>(
<tr key = {eintrag.Eintrag}>
<td  className = {styles.tdeintragtabelle} ref= {eintrag.Titel}>{eintrag.Titel}</td>
<td className = {styles.tdeintragtabelle}>{eintrag.Eintrag}</td>
<td className = {styles.tdeintragtabelle}><button>bearbeiten</button></td>
<td className = {styles.tdeintragtabelle}><button type= "submit"  >löschen</button></td>
</tr>
 ))}
</tbody>
</table>
    </div>

    <div>
  <form>
        <label className= {style.inputlabel} >Titel</label>
        <input className={style.inputtitel} type = "text" name = "titelnew" value={adding.titelnew} onChange= {e =>this.setState({adding:{...adding, titelnew: e.target.value}})}/>
        </form>
        <form>
        <label className= {style.inputlabel} >Lass es raus...</label>
        <textarea className={style.inputeintrag} type = "text" name = "eintragnew" value={adding.eintragnew} onChange= {e =>this.setState({adding:{...adding, eintragnew: e.target.value}})}/>
        <button type= "submit" onClick= {this.addSchwarzmaler}>Eintrag hinzufügen</button>
</form>

  </div>
  </div>
);
}
}
export default Schwarzmaler;
