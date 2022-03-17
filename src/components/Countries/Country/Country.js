import React from 'react';

const Country = (props) => {
    const {name,population,flags}= props.country
    return (
      <div>
        <h2>Name: {name.common} </h2>
        <h3>Population: {population}</h3>
        <img src={flags.png} alt="" />
      </div>

    );
};

export default Country;