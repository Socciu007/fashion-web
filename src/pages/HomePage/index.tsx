import "./style.scss"
import { mockData } from "../../../mock/mock-data"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import video1 from "../../assets/videos/video1.mp4"
import video2 from "../../assets/videos/video2.mp4"
import video3 from "../../assets/videos/video3.mp4"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="home-page">
      <section className="home-section-1">
        <div className="home-section-1__wrapper">
          <div className="home-section-image"></div>
          <div className="home-section-1__detail">
            <span>GỢI Ý QUÀ TẶNG 8/3</span>
          </div>
        </div>
      </section>
      <section className="home-section-2">
        <h2>Sự lựa chọn</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          // pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          className="product-slide"
        >
          {mockData.products.map(product => (
            <SwiperSlide key={product.id}>
              <div className="product-slide">
                <div className="product-slide__wrapper">
                  <div className="product-slide-image">
                    <img src={product.image[0].url} height={200} width={200} alt={product.name} onClick={() => navigate(`/product/${product.id}`)} />
                  </div>
                  <div className="product-slide-detail">
                    <h3 onClick={() => navigate(`/product/${product.id}`)}>{product.name}</h3>
                    <p>{product.size[0].price}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="home-section-3">
        <div className="home-section-3__wrapper">
          <div className="home-section-title">
            <h2>Khám phá ngay</h2>
          </div>
          <div className="home-section-video">
            <video playsInline src={video1} height={450} controls/>
            <video playsInline src={video2} height={450} controls/>
            <video playsInline src={video3} height={450} controls/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage