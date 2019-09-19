import React ,{Component}from 'react';
import './App.css';
import styles from './kontakt.module.css';

 
class Kontakt extends Component { 

  state = {
    anfrage: {
        name: '',
        vorname: '',
        email:'',
        telefon:'',
        betreff:'',
        nachricht: ''
    }
  }


  componentDidMount() {
    this.setAnfrage();
    }

    setAnfrage = _ => {
      const {anfrage}=this.state ;
    fetch(`http://localhost:3001/Kontakt/add?name=${anfrage.name}&vorname=${anfrage.vorname}&email=${anfrage.email}&telefon=${anfrage.telefon}&betreff=${anfrage.betreff}&nachricht=${anfrage.nachricht}`) 
    .catch(err=>console.error(err))
    };

    render() { 
      const {anfrage}= this.state;
  return (

    <div className={styles.kontaktstart}>
      <h1>Kontakt</h1>
      <p>
        Hast du Verbesserungsvorschläge? Anregungen? Hat dich etwas speziell bewegt? <br></br>
        Dann schreib uns!<br></br>
        Wir versuchen so schnell, wie möglich darauf einzugehen
      </p>
    
    <div className={styles.kontaktformular} >
        <form>
        <lable className={styles.labelkontakt}>Name:</lable>
        <input className={styles.inputkontakt} type = "text" name = "name" value={anfrage.name} onChange= {e =>this.setState({anfrage:{...anfrage, name: e.target.value}})}/>
        </form>

        <form>
        <lable className={styles.labelkontakt} >Vorname:</lable>
        <input className={styles.inputkontakt}  type = "text" name = "vorname" value={anfrage.vorname} onChange= {e =>this.setState({anfrage:{...anfrage, vorname: e.target.value}})}/>
        </form>

        <form>
        <lable className={styles.labelkontakt} >E-Mail:</lable>
        <input  className={styles.inputkontakt}  type = "e-mail" name = "email" value={anfrage.email} onChange= {e =>this.setState({anfrage:{...anfrage, email: e.target.value}})}/>
        </form>

        <form>
        <lable className={styles.labelkontakt} >Telefon: </lable>
        <input className={styles.inputkontakt}  type = "tel" name = "telefon" value={anfrage.telefon} onChange= {e =>this.setState({anfrage:{...anfrage, telefon: e.target.value}})}/>
        </form>

        <form>
        <lable className={styles.labelkontakt} >Betreff:</lable>
        <input className={styles.inputkontakt}  type = "text" name = "betreff" value={anfrage.betreff} onChange= {e =>this.setState({anfrage:{...anfrage, betreff: e.target.value}})}/>
        </form>
        <div className={styles.textareadivkontakt}>
        <form>
        <lable className={styles.labelkontakt} >Nachricht: </lable>
        <textarea className={styles.textareakontakt} type = "text" name = "nachricht" value={anfrage.nachricht} onChange= {e =>this.setState({anfrage:{...anfrage, nachricht: e.target.value}})}/>
        </form>
        </div>

        <button className={styles.buttonkontakt} type= "submit" onClick= {this.setAnfrage}>Absenden</button>
    </div>
    </div>
  );
}
}

export default Kontakt;