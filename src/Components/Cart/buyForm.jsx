import {useState, useContext} from 'react';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../../Firebase/Firebase';
import {Context} from '../../Context/CartContext';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';

export const BuyForm = () => {
	const {cart, totalPrice, reset} = useContext(Context);
	const [buyerInfo, setBuyerInfo] = useState({
		name: '',
		phone: '',
		email: '',
		date: serverTimestamp(),
		price: totalPrice()
	});
	const HandlerfinishBuy = () => {
		const finishBuy = collection(db, 'soldproducts');
		addDoc(finishBuy, {buyerInfo, items: cart}).then((result) => {
			swal(`Gracias por la compra!`, `tu ID es: ${result.id}`);
		});
		reset();
	};
	return (
		<div className="formFinishBuy">
			<h2>Ingresa tus datos</h2>
			<p>Ingresa tu nombre:</p>
			<input type="text" placeholder="Indique su nombre aqui" onChange={(e) => setBuyerInfo({...buyerInfo, name: e.target.value})} />
			<p>Ingresa tu email:</p>
			<input type="email" placeholder="Indique su email aqui" onChange={(e) => setBuyerInfo({...buyerInfo, email: e.target.value})} />
			<p>Ingresa tu numero de telefono:</p>
			<input
				type="number"
				placeholder="Indique su numero de telefono aqui"
				onWheel={(e) => e.target.blur()}
				onChange={(e) => setBuyerInfo({...buyerInfo, phone: e.target.value})}
			/>
			<Link to={'/'} id="sendForm" onClick={HandlerfinishBuy}>
				Finalizar
			</Link>
		</div>
	);
};
