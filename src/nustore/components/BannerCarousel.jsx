import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import bannerOffer from "../../assets/images/bannerOffers.jpg";
import brandBanner from "../../assets/images/brandBanner.jpg";
import bannerTrending from "../../assets/images/bannerTrending.jpg";
import "./bannerCarousel.css";

export const BannerCarousel = () => {
    const images = [bannerOffer, bannerTrending, brandBanner];

    const options = { delay: 4000, loop: "on" };
    const [emblaRef] = useEmblaCarousel(options, [Autoplay(options)]);

    return (
        <div>
            <div className="carousel" ref={emblaRef}>
                <div className="carousel_container">
                    {images.map((image) => (
                        <div className="carousel_slide" key={image}>
                            <img className="carousel_slide_img" src={image} alt="banner" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
