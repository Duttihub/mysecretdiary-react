import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styles from './impressum.module.css';


class Impressum extends Component {
  render() {
    return (
      <div >
        <h2>Impressum</h2>
        <div >
          <h3>Kontakt:</h3>
          My Secret Diary Foundation<br></br>
          Dream Street 4<br></br>
          0234 Neverland<br></br>
          Telefon: 098 765 432 21
        </div>

        <div className={styles.mapdiv}>
          <Map
            google={this.props.google}
            zoom={8}
            style={{ width: '40%' }}
            initialCenter={{ lat: 34.00, lng: -121.00 }}
          >
            <Marker position={{ lat: 34.70, lng: -120.00 }} />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAPibDCBJA2Y71T-tvM0_Boo8B5sBwt6ek'
})(Impressum);;