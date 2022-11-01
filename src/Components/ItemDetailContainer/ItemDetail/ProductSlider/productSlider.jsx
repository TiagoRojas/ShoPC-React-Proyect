import {Carousel} from 'react-responsive-carousel';

export const ProductSlider = (images) => {
	return (
		<Carousel showArrows={false} showThumbs={true} showStatus={false}>
			{images.images.map((e) => {
				return Object.values(e).map((elm, i) => {
					return <img src={elm} alt={'Ryzen7_5800X_Image_'} key={i} />;
				});
			})}
		</Carousel>
	);
};
