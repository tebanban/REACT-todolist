import React from "react";
import PropTypes from "prop-types";

const List = ({ itemList }) => {
	return (
		<div>
			{itemList.map(itemObj => {
				return <li key={Math.random() * 1000}>{itemObj.item}</li>;
			})}
		</div>
	);
};

export default List;

List.propTypes = {
	itemList: PropTypes.string
};
