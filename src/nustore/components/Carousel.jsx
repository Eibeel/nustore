import { Box, Image } from '@chakra-ui/react'
import Carousel from 'nuka-carousel'
import bannerAudio from "../../assets/images/bannerAudio.jpg";
import bannerGadgets from "../../assets/images/bannerGadgets.jpg";
import bannerClothing from "../../assets/images/bannerClothing.jpg";

export const BannerCarousel = () => {

    const images = [bannerAudio, bannerGadgets, bannerClothing];

    return (
        <Box w={{ base: "100vw", md: "44.5rem" }} margin="auto" cursor="pointer">
            <Carousel autoplay wrapAround withoutControls>
                {
                    images.map(image => (
                        <Image src={image} key={image} />
                    ))
                }
            </Carousel>
        </Box >
    )
}
