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
			<div className="col wrapper rounded">
				<h3 className="text-white">My ToDo List</h3>
				<div className="row input-wrapper d-flex justify-content-between p-2">
					<input
						className="input border rounded p-2 col-10"
						type="text"
						placeholder="I have to..."
						value={currentItem}
						onChange={onChangeHandler}
					/>
					<button
						className="addButton border rounded p-2 ml-1 col-1"
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
