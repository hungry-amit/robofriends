import React from 'react';
import './Search.css';

function Search(props){

	const changeHandler=(event)=>{
props.callback_function_from_parent(event.target.value);
}

	return(
		<div className="search">
		<span id="sp">Search:</span>
		<textarea id="ta" onChange={changeHandler}></textarea>
		</div>
		)
}
export default Search;