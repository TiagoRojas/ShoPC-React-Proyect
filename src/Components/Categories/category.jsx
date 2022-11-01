import {useState, useContext} from 'react';
import {Context} from '../../Context/Context';
import {db} from '../../Firebase/Firebase';
import {collection, getDocs} from 'firebase/firestore';

export const Categories = () => {
	const {passInfoToContext} = useContext(Context);
	const [filtered, setFiltered] = useState([]);
	const CategoryCollection = collection(db, 'products');

	const getCategory = async () => {
		try {
			const data = await getDocs(CategoryCollection);
			const category = data.docs.map((product) => {
				return product.data();
			}); // eslint-disable-next-line
			category.map((e) => {
				if (!filtered.includes(e.category)) {
					setFiltered([...filtered, e.category]);
				}
			});
		} catch (error) {
		} finally {
			passInfoToContext(filtered);
		}
	};
	getCategory();
};
