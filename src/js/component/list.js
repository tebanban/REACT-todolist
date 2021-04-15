import React from "react";
import PropTypes from "prop-types";

const List = ({ itemList }) => {
	return (
		<div>
			<p>{itemList}</p>
		</div>
	);
};

export default List;

List.propTypes = {
	itemList: PropTypes.string
};
