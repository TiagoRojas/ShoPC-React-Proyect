import {useState, useContext} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../Firebase/Firebase";
import {Context} from "../../Context/CartContext";

export const BuyForm = () => {
	const {cart} = useContext(Context);
	const [buyerInfo, setBuyerInfo] = useState({
		name: undefined,
		phone: undefined,
		email: undefined,
	});
	const test = () => {
		const finishBuy = collection(db, "soldproducts");
		addDoc(finishBuy, {buyerInfo, items: cart});
	};
	return (
		<div className="formFinishBuy">
			<p>Ingresa tu nombre:</p>
			<input
				type="text"
				id=""
				placeholder="Indique su nombre aqui"
				onChange={(e) => setBuyerInfo({...buyerInfo, name: e.target.value})}
			/>
			<p>Ingresa tu email:</p>
			<input
				type="email"
				id=""
				placeholder="Indique su email aqui"
				onChange={(e) => setBuyerInfo({...buyerInfo, email: e.target.value})}
			/>
			<p>Ingresa tu numero de telefono:</p>
			<input
				type="number"
				id=""
				placeholder="Indique su numero de telefono aqui"
				onWheel={(e) => e.target.blur()}
				onChange={(e) => setBuyerInfo({...buyerInfo, phone: e.target.value})}
			/>
			<button onClick={test}>Finalizar</button>
		</div>
	);
};
