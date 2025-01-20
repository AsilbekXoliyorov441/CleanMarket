import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { products } from "../const/products";
import { categories } from "../const/categories";

const HomePage = () => {
  return (
    <>
      <section id="hero" className="pb-[60px]">
        <div className="container mb-[20px]">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/home/hero-slider-image.png" alt="hero" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="products " className="py-[60px]">
        <div className="container">
          <div className="product-titles flex justify-between items-center mb-[40px]">
            <h1 className="text-[32px] font-bold">Top tovarlar</h1>
            <a
              className="text-[18px] text-headerColor underline"
              href="products"
            >
              Barchasi
            </a>
          </div>
          <Swiper
            spaceBetween={20}
            centeredSlides={false}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // Breakpoints for responsive design
              500: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.slice(0, 12).map((product) => (
              <SwiperSlide>
                <div className="max-w-[350px] mx-auto border border-gray-100 rounded-[14px] relative px-[14px] py-[14px]">
                  {product.discount ? (
                    <span className="absolute w-[55%] bg-white rounded-br-[9.65px] font-bold flex items-center justify-center h-[40px]">
                      {product?.discount}%
                    </span>
                  ) : (
                    <>
                      {product.status === "Maxsus taklif" ? (
                        <span className="bg-yellow-400  w-[55%] rounded-br-[9.65px] font-bold flex items-center justify-center h-[40px] absolute">
                          {product?.status}
                        </span>
                      ) : (
                        <span className="bg-white text-headerColor w-[55%] h-[40px] rounded-br-[9.65px] font-bold flex items-center justify-center absolute">
                          {product?.status}
                        </span>
                      )}
                    </>
                  )}

                  <img
                    className="bg-gray-100 w-full rounded-[9.65px] "
                    src={product?.image}
                    alt={product.status}
                  />
                  <a
                    href="/cart"
                    className="absolute cursor-pointer w-[50px] h-[50px] bg-white top-[20px] right-[20px] rounded-[8px] flex items-center justify-center text-headerColor"
                  >
                    <img
                      src="/home/heart.svg"
                      alt="heart"
                      className="text-headerColor  fill-headerColor"
                    />
                  </a>
                  <p className="mt-[24px] text-gray-600">
                    {product?.description}
                  </p>
                  <p className="mb-[12px]">{product?.brandName}</p>
                  <h2 className="font-bold text-[20px]">
                    {product?.price} сум
                  </h2>
                  <div className="flex items-center justify-between mt-[12px]">
                    <a href={`products/${product.id}`} className="flex justify-center items-center w-[75%] bg-gray-100 h-[60px] text-[22px] font-bold">
                      Xarid qilish
                    </a>
                    <button className="w-[20%] bg-gray-100 h-[60px] flex items-center justify-center">
                      <img src="/home/Exchange.svg" alt="exchange" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            spaceBetween={20}
            centeredSlides={false}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // Breakpoints for responsive design
              500: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-[98px]"
          >
            {products.slice(12, 24).map((product) => (
              <SwiperSlide>
                <div className="max-w-[350px] mx-auto border border-gray-100 rounded-[14px] relative px-[14px] py-[14px]">
                  {product.discount ? (
                    <span className="absolute w-[55%] bg-white rounded-br-[9.65px] font-bold flex items-center justify-center h-[40px]">
                      {product?.discount}%
                    </span>
                  ) : (
                    <>
                      {product.status === "Maxsus taklif" ? (
                        <span className="bg-yellow-400  w-[55%] rounded-br-[9.65px] font-bold flex items-center justify-center h-[40px] absolute">
                          {product?.status}
                        </span>
                      ) : (
                        <span className="bg-white text-headerColor w-[55%] h-[40px] rounded-br-[9.65px] font-bold flex items-center justify-center absolute">
                          {product?.status}
                        </span>
                      )}
                    </>
                  )}

                  <img
                    className="bg-gray-100 w-full rounded-[9.65px] "
                    src={product?.image}
                    alt={product.status}
                  />
                  <a
                    href="/cart"
                    className="absolute cursor-pointer w-[50px] h-[50px] bg-white top-[20px] right-[20px] rounded-[8px] flex items-center justify-center text-headerColor"
                  >
                    <img
                      src="/home/heart.svg"
                      alt="heart"
                      className="text-headerColor  fill-headerColor"
                    />
                  </a>
                  <p className="mt-[24px] text-gray-600">
                    {product?.description}
                  </p>
                  <p className="mb-[12px]">{product?.brandName}</p>
                  <h2 className="font-bold text-[20px]">
                    {product?.price} сум
                  </h2>
                  <div className="flex items-center justify-between mt-[12px]">
                    <a href={`products/${product.id}`} className="flex justify-center items-center w-[75%] mx-auto bg-gray-100 h-[60px] text-[22px] font-bold">
                      Xarid qilish
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="categories " className="py-[60px]">
        <div className="container">
          <div className="category-titles flex justify-between items-center mb-[40px]">
            <h1 className="text-[32px] font-bold">Categoriyalar</h1>
            <a
              className="text-[18px] text-headerColor underline"
              href="categories"
            >
              Barchasi
            </a>
          </div>
          {/**Categories */}
          <Swiper
            spaceBetween={20}
            centeredSlides={false}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // Breakpoints for responsive design
              500: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {categories.slice(0, 6).map((category) => (
              <SwiperSlide>
                <div className="max-w-[350px] h-[350px] mx-auto border border-gray-100 rounded-[24px] relative overflow-hidden">
                  <span className="absolute w-[202px] text-[20px] top-[24px] left-[24px]">
                    {category?.title}
                  </span>

                  <img
                    className="w-full"
                    src={category?.image}
                    alt={category.title}
                  />
                  <p className="absolute left-[24px] bottom-[30px]">
                    {category?.remainingProducts} ta mahsulot
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomePage;
