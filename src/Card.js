import React from 'react';

const Card = ({id, name, email}) => {
	return (
      <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='Robots' src= {`https://robohash.org/${id}?set=set2?size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      </div>
		);
}

export default Card;