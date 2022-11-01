import {getDocs} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {CircularProgress} from '@mui/material';
import {ImageSlider} from './imageSlider';
import RandomItemList from './randomItems/randomItemList';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const HomeContainer = ({collectionURL}) => {
	const [randomProducts, setRandomProducts] = useState([]);
	const [random, setRandom] = useState([]);
	const [Loading, setLoading] = useState(true);
	useEffect(() => {
		getDocs(collectionURL)
			.then((data) => {
				const list = data.docs.map((product) => {
					return {
						...product.data(),
						id: product.id
					};
				});
				setRandom([list[Math.floor(Math.random() * list.length)]]);
				setRandomProducts(list);
			})
			.catch(() => {
				setLoading(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [collectionURL]);
	useEffect(() => {
		if (Loading === false && random.length < 4) {
			const randomList = [...random];
			for (let i = 0; i < 5; i++) {
				let c = randomProducts[Math.floor(Math.random() * randomProducts.length)];
				if (!randomList.includes(c)) {
					randomList.push(c);
					if (randomList.length === 3 && random.length < 2) {
						setRandom(randomList);
					}
				}
			}
		}
	}, [Loading, random, randomProducts]);
	return (
		<>
			{Loading ? (
				<CircularProgress id="loading-icon" />
			) : (
				<>
					<div className="homeContainer">
						<ImageSlider />
						<h2>PRODUCTOS RECOMENDADOS:</h2>
						<RandomItemList products={random} />
					</div>
				</>
			)}
		</>
	);
};
export default HomeContainer;
