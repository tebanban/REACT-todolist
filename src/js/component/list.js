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
		<div className="cardContainer row">
			{itemList.map(itemObj => {
				return (
					<div
						className=" card d-flex justify-content-between p-2 m-3"
						key={Math.random() * 1000}
						style={{ width: "12rem", height: "16rem" }}>
						{itemObj.text}
						<button
							className="delButton border rounded"
							onClick={() => deleteText(itemObj.id)}>
							{" "}
							<i className="fas fa-minus-circle" />{" "}
						</button>
					</div>
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
