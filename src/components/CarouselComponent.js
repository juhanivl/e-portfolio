import React, { Component } from 'react';
import Carousel from 'grommet/components/Carousel';
import Box from 'grommet/components/Box';

export default class CarouselComponent extends Component {


  render(){

    return(
      <Carousel>
      <Box pad='large'
        colorIndex='neutral-2'>
        <Box pad='medium'
          colorIndex='neutral-3'>
          2 Content inside of a Box element.
        </Box>
      </Box>
        <Box pad='large'
          colorIndex='neutral-3'>
          <Box pad='medium'
            colorIndex='neutral-1'>
            3 Content inside of a Box element.
          </Box>
        </Box>
      </Carousel>
    );
  }
}
