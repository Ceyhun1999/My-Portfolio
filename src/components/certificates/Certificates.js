import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { sliderData } from "../../data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper";

import "./Certificates.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Certificates({ changeNavActiveLink }) {
    const [width, setWidth] = useState(document.documentElement.clientWidth);
    const { ref, inView } = useInView({ threshold: 0.5 });
    const updateDimensions = () => setWidth(document.documentElement.clientWidth);

    useEffect(() => {
        if (inView) changeNavActiveLink("education");
    }, [inView]);

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <section ref={ref} id="education" className="sertificates">
            <div className="container">
                <h2 className="sertificates__title">Certificates</h2>
                <Swiper
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    modules={[Pagination, Autoplay, Mousewheel]}
                    slidesPerView={width > 700 ? 2 : 1}
                    spaceBetween={10}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    mousewheel={true}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    loop={true}>
                    {sliderData.data.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <a href={item.href} target="_blank">
                                <div className={item.class + " slide-item"}>
                                    <div className="slide__shadow">
                                        <span className="slide__text">{item.text}</span>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
