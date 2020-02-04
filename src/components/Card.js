import React from 'react';
import './Card.css';
function Card(props){
	const received_obj=props.props_from_parent;
	const img_src= "https://robohash.org/" + received_obj.id;
	return(
		<div className="card">
			<img src={img_src} height="250px" width="250px"/>
			<h2>Name: {received_obj.name}</h2>
			<h2>Username: {received_obj.username}</h2>
			<h2>Email: {received_obj.email}</h2>
		</div>
		)
}
export default Card;