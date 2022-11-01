export const InfoDetails = (info) => {
	const GeneralInfo = () => {
		if (info.info.Type === 'Motherboard') {
			return (
				<>
					<div>
						<h3>CARACTERISTICAS GENERALES</h3>
						<div>
							<p>
								Plataforma <span>{info.info.Platform}</span>
							</p>
							<p>
								Socket <span>{info.info.Socket}</span>
							</p>
							<p>
								Chipset <span>{info.info.Chipset}</span>
							</p>
						</div>
					</div>
					<div>
						<h3>DIMENSIONES</h3>
						<p>
							Factor <span>{info.info.Factor}</span>
						</p>
					</div>
					<div>
						<h3>MEMORIA</h3>
						<p>
							Cantidad de puertos <span>{info.info.MemorySpace}</span>
						</p>
						<p>
							Tipo de Memoria <span>{info.info.MemoryType}</span>
						</p>
					</div>
					<div>
						<h3>CONECTIVIDAD</h3>
						<p>
							Cantidad de puertos PCI-e 16X <span>{info.info.Pcie16x}</span>
						</p>
						<p>
							Cantidad de puertos PCI-e 1X <span>{info.info.Pcie1x}</span>
						</p>
						<p>
							Puertos SATA <span>{info.info.Sata}</span>
						</p>
						<p>
							Placa de red <span>{info.info.WifiChip}</span>
						</p>
						<p>
							Cantidad de puertos USB 2.0 <span>{info.info.USB2}</span>
						</p>
						<p>
							Cantidad de puertos USB3.0 <span>{info.info.USB3}</span>
						</p>
						<p>
							Cantidad de puertos USB3.1 <span>{info.info.USB31}</span>
						</p>
						<p>
							Cantidad de puertos USB3.2 <span>{info.info.USB32}</span>
						</p>
						<p>Cantidad de puertos Type-C {info.info.USBTypeC === undefined ? <span>0</span> : info.info.USBTypeC}</p>
						<p>
							Cantidad de puertos NVME <span>{info.info.SlotNVME}</span>
						</p>
					</div>
					<div>
						<h3>ENERGIA</h3>
						<p>
							Watts maximos para CPU <span>{info.info.MaxCpuWatt}W</span>
						</p>
						<p>
							Consumo <span>{info.info.comsumption}W</span>
						</p>
					</div>
					<div>
						<h3>SONIDO</h3>
						<p>
							Placa de Sonido <span>{info.info.SoundBoard}</span>
						</p>
					</div>
				</>
			);
		}
		if (info.info.Type === 'Procesadores') {
			return (
				<>
					<div>
						<h3>CARACTERISTICAS GENERALES</h3>
						<div>
							<p>
								Modelo: <span>{info.info.Model}</span>
							</p>
							<p>
								Familia: <span>{info.info.Family}</span>
							</p>
							<p>
								Socket: <span>{info.info.Cores}</span>
							</p>
							<p>
								Nucleos: <span>{info.info.Chipset}</span>
							</p>
							<p>
								Hilos: <span>{info.info.Threads}</span>
							</p>
							<p>
								Frecuencia: <span>{info.info.Frequency}</span>
							</p>
							<p>
								Frecuencia Turbo: <span>{info.info.Turbo}</span>
							</p>
							<p>
								Graficos Integrados: <span>{info.info.iGPU}</span>
							</p>
						</div>
					</div>
					<div>
						<h3>MEMORIA</h3>
						<p>
							Memoria L2: <span>{info.info.L2}</span>
						</p>
						<p>
							Memoria L3: <span>{info.info.L3}</span>
						</p>
					</div>
					<div>
						<h3>CONSUMO Y DISIPADOR</h3>
						<p>
							TDP: <span>{info.info.TDP}</span>
						</p>
						<p>Incluye cooler CPU: {info.info.Cooler === undefined ? <span>No</span> : <span>{info.info.L3}</span>}</p>
					</div>
				</>
			);
		}
		if (info.info.Type === 'Auriculares') {
			return (
				<>
					<div>
						<h3>CARACTERISTICAS GENERALES</h3>
						<div>
							<p>
								Audio: <span>{info.info.Audio}</span>
							</p>
							<p>
								Colores: <span>{info.info.Color}</span>
							</p>
							<p>
								Conexión: <span>{info.info.Conection}</span>
							</p>
							<p>
								Con micrófono: <span>{info.info.Mic}</span>
							</p>
						</div>
					</div>
					<div>
						<h3>MICRÓFONO</h3>
						<p>
							Respuesta mínima: <span>{info.info.Micminhz}</span>
						</p>
						<p>
							Respuesta máxima: <span>{info.info.Micmaxhz}</span>
						</p>
						<p>
							Sensibilidad: <span>{info.info.MicSens}</span>
						</p>
						<p>
							Tipo de micrófono: <span>{info.info.MicType}</span>
						</p>
						<p>Cancelacion de ruidos: {info.info.TypeMic === undefined ? <span>No</span> : <span>{info.info.TypeMic}</span>}</p>
						<p>
							Tipo captación: <span>{info.info.MicCap}</span>
						</p>
					</div>
					<div>
						<h3>CONECTIVIDAD</h3>
						<p>USB: {info.info.USB === undefined ? <span>No</span> : <span>{info.info.USB}</span>}</p>
						<p>Inalámbrico con Receptor: {info.info.Wireless === undefined ? <span>No</span> : <span>{info.info.Wireless}</span>}</p>
						<p>Inalámbrico por Bluetooth: {info.info.Bluetooth === undefined ? <span>No</span> : <span>{info.info.Bluetooth}</span>}</p>
					</div>
					<div>
						<h3>COMPATIBILIDAD</h3>
						<p>
							Compatibilidad: <span>{info.info.Compatibility}</span>
						</p>
					</div>
					<div>
						<h3>SONIDO</h3>
						<p>
							Impedancia: <span>{info.info.Impedance}</span>
						</p>
						<p>
							Respuesta mínima: <span>{info.info.MinResponse}</span>
						</p>
						<p>
							Respuesta máxima: <span>{info.info.MaxResponse}</span>
						</p>
						<p>
							Sensibilidad: <span>{info.info.Sensibility}</span>
						</p>
						<p>
							Surround: <span>{info.info.Sorround === undefined ? <span>No</span> : <span>{info.info.Sorround}</span>}</span>
						</p>
					</div>
				</>
			);
		}
	};
	return <div id="infoContainer">{GeneralInfo()}</div>;
};
