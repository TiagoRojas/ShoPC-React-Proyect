import {useState} from 'react';
import {NavLink} from 'react-router-dom';

export const DropDown = ({categoryList}) => {
	const [open, setOpen] = useState(false);
	const menu = categoryList.map((e, i) => {
		return (
			<NavLink key={i} to={`../products/${e}`} className="categoryName">
				{e}
			</NavLink>
		);
	});
	const handlerClick = () => {
		setOpen(!open);
		if (!open) {
			document.querySelector('#arrowCategory').classList.add('arrowActive');
			document.querySelector('#categorySelector').classList.add('categoryShow');
		} else {
			document.querySelector('#arrowCategory').classList.remove('arrowActive');
			document.querySelector('#categorySelector').classList.remove('categoryShow');
		}
	};
	const changeRowDirection = (e) => {
		if (!e.target.classList.contains('row')) {
			document.querySelector('#rowImage').classList.remove('row');
			document.querySelector('#item-container').classList.remove('row');
			document.querySelector('#item-container').classList.add('column');
			e.target.classList.add('column');
		}
	};
	const changeColumnDirection = (e) => {
		if (!e.target.classList.contains('column')) {
			document.querySelector('#columnImage').classList.remove('column');
			document.querySelector('#item-container').classList.remove('column');
			document.querySelector('#item-container').classList.add('row');
			e.target.classList.add('row');
		}
	};
	return (
		<>
			<div className="orderSelector">
				<p>Orden:</p>
				<img src="https://i.postimg.cc/FdtbxVT5/column.png" alt="column mode" onClick={changeColumnDirection} id="columnImage" />
				<img src="https://i.postimg.cc/hz9LZQYJ/row.png" alt="row mode" onClick={changeRowDirection} id="rowImage" />
			</div>
			<div id="categorySelector">
				<span onClick={handlerClick}>
					Categorias <img src="https://i.postimg.cc/JzHzgmtY/arrow-up-45.png" alt="arrow" id="arrowCategory" />
				</span>
				<div className="categoriesContainer">
					{!open ? undefined : (
						<>
							<NavLink to={'/products/all'} className="categoryName">
								Todo
							</NavLink>
							{menu}
						</>
					)}
				</div>
			</div>
		</>
	);
};
