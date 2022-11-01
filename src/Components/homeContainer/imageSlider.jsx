import {Carousel} from 'react-responsive-carousel';

const images = [
	{
		original: 'https://i.postimg.cc/fWXqTpsj/1888379.webp',
		name: 'Componentes de computadora / imagen en blanco y negro'
	},
	{
		original: 'https://i.postimg.cc/3R7Rs1V7/computer-laptop-hardware-white-background-flat-lay-pc-parts-top-view-repair-engineering-concept-cpu.jpg',
		name: 'Componentes de computadora'
	}
];

export const ImageSlider = () => {
	return (
		<Carousel autoPlay={true} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} className="imageSlider">
			{images.map((e, i) => {
				return <img src={e.original} alt={e.name} key={i} />;
			})}
		</Carousel>
	);
};
