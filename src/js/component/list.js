import React, { useState } from "react";
import PropTypes from "prop-types";

const List = ({ itemList, setItemList }) => {
	const deleteText = id => {
		const newList = itemList.filter(itemObj => {
			return itemObj.id !== id;
		});
		setItemList(newList);
	};

	const [cardColor, setCardColor] = useState("yellowCard");

	const toggleColor = () => {
		setCardColor(cardColor == "yellowCard" ? "redCard" : "yellowCard");
	};

	return (
		<div className="cardContainer row">
			{itemList.map(itemObj => {
				return (
					<div
						className={cardColor}
						key={Math.random() * 1000}
						style={{ width: "12rem", height: "16rem" }}>
						<h3>Task N°{itemObj.index}</h3>
						{itemObj.text}
						<button
							className="delButton border rounded"
							onClick={() => deleteText(itemObj.id)}>
							{" "}
							<i className="fas fa-minus-circle" />{" "}
						</button>
						<button onClick={toggleColor}>color</button>
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
