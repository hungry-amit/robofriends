import React from 'react';
import Card from './Card.js';
import './CardList.css';
function CardList({robots}){
	return(
			<div className="cardList">
			{
				robots.map(robot => 
				<>
					<Card key={robot.id} props_from_parent={robot}/>
				</>
			)
			}
			</div>
		)
}
export default CardList;