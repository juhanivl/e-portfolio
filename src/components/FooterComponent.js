import React, { Component } from 'react';
import Footer from 'grommet/components/Footer';



export default class FooterComponent extends Component {

  render(){
    return(
      <Footer primary={true} appCentered={true} direction="column"
        align="center" pad="small" colorIndex="grey-1">
        <p>
          Contact me via Linkedin <a href="https://www.linkedin.com/in/juhanilavonen?trk=hp-identity-photo" target="_blank">Linkedin</a>!
        </p>
      </Footer>
    );
  }
}
