import React from "react";
import PropTypes from "prop-types";

const List = ({ itemList }) => {
	return (
		<div>
			{itemList.map(itemObj => {
				return <p>{itemObj.item}</p>;
			})}
		</div>
	);
};

export default List;

List.propTypes = {
	itemList: PropTypes.string
};
