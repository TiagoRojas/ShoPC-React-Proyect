import {useState} from "react";

export const BuyForm = () => {
	const [buyerInfo, setBuyerInfo] = useState({
		name: undefined,
		phone: undefined,
		email: undefined,
	});

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
			<button onClick={() => console.log(buyerInfo)}>Finalizar</button>
		</div>
	);
};
