import React, { useState } from "react";
import List from "./list";

//include images into your bundle

//create your first component
export function App() {
	const [currentItem, setCurrentItem] = useState(null);
	const [itemList, setItemList] = useState([]);

	const onChangeHandler = e => {
		setCurrentItem(e.target.value);
		//console.log("current", e.target.value);
	};

	const onSubmitHandler = e => {
		setItemList([...itemList, currentItem]);
		//console.log(itemList);
		setCurrentItem("");
	};

	return (
		<div className="text-center mt-5">
			<div className="wrapper">
				<input
					type="text"
					value={currentItem}
					onChange={onChangeHandler}
				/>
				<button onClick={onSubmitHandler}> + </button>

				<List itemList={itemList} />
			</div>
		</div>
	);
}
