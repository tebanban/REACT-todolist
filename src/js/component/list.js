import React from "react";
import PropTypes from "prop-types";

const List = ({ itemList, setItemList }) => {
	const deleteText = id => {
		const newList = itemList.filter(itemObj => {
			return itemObj.id !== id;
		});
		setItemList(newList);
	};

	return (
		<div className="item card bg-dark text-white">
			{itemList.map(itemObj => {
				return (
					<li className="itemText " key={Math.random() * 1000}>
						{itemObj.text}
						<button
							className="delButton rouded"
							onClick={() => deleteText(itemObj.id)}>
							{" "}
							<i className="fas fa-minus-circle" />{" "}
						</button>
					</li>
				);
			})}
		</div>
	);
};

export default List;

List.propTypes = {
	itemList: PropTypes.string,
	setItemList: PropTypes.string
};
