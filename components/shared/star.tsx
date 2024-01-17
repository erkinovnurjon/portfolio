"use client"

import React, { Component , } from 'react';
import ReactStars from 'react-stars';

class Star extends Component {
  
  constructor(props:any) {
    super(props);
    this.state = {};
  }

  ratingChanged = (newRating : any) => {
    console.log(newRating);
  };

  render() {
    return (
      <div className='flex justify-center my-3'>
        <ReactStars
          count={5}
          onChange={this.ratingChanged}
          value={3.5}
          size={24}
          color2={'#ffd700'}
        />

      </div>
    );
  }
}

export default Star;
