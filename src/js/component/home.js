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
			{ item: currentItem, completed: false, id: Math.random() * 1000 }
		]);
		//console.log(itemList);
		setCurrentItem("");
	};

	return (
		<div className="App">
			<div className="wrapper bg-dark rounded">
				<div className="input-wrapper rounded p-2">
					<input
						type="text"
						value={currentItem}
						onChange={onChangeHandler}
					/>
					<button onClick={onSubmitHandler}> + </button>
				</div>
				<div>
					<List itemList={itemList} />
				</div>
			</div>
		</div>
	);
}
