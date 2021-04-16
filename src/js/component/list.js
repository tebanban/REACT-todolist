import React from "react";
import PropTypes from "prop-types";

const List = ({ itemList }) => {
	return (
		<div className="item card bg-dark text-white">
			{itemList.map(itemObj => {
				return (
					<li key={Math.random() * 1000}>
						{itemObj.item}
						<button> x </button>
					</li>
				);
			})}
		</div>
	);
};

export default List;

List.propTypes = {
	itemList: PropTypes.string
};
