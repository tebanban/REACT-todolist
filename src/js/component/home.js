import React, { useState } from "react";
import List from "./list";

//include images into your bundle

//create your first component
export function App() {
	const [currentItem, setCurrentItem] = useState("");
	const [itemList, setItemList] = useState([]);

	const onChangeHandler = e => {
		setCurrentItem(e.target.value);
		//console.log("current", e.target.value);
	};

	const onSubmitHandler = e => {
		setItemList([
			...itemList,
			{ text: currentItem, completed: false, id: Math.random() * 1000 }
		]);
		//console.log(itemList);
		setCurrentItem("");
	};

	return (
		<div className="container">
			<div className="col wrapper bg-dark rounded">
				<h3 className="text-white">My ToDo List</h3>
				<div className="input-wrapper p-2">
					<input
						className="input rounded"
						type="text"
						placeholder="I have to..."
						value={currentItem}
						onChange={onChangeHandler}
					/>
					<button
						className="addButton rounded"
						onClick={onSubmitHandler}>
						{" "}
						<i className="fas fa-plus" />{" "}
					</button>
				</div>
				<div>
					<List itemList={itemList} setItemList={setItemList} />
				</div>
			</div>
		</div>
	);
}
