import React, { useContext, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { products } from "../const/products";
import { categories } from "../const/categories";
import { FavouriteContext } from "../context/FavouriteContext";

const HomePage = () => {
  const { favourite , addToFavourite } = useContext(FavouriteContext);

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
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[200px] object-cover md:object-contain md:h-auto"
                src="/home/hero-slider-image.png"
                alt="hero"
              />
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
            {products.slice(0, 12).map((product, index) => (
              <SwiperSlide key={index}>
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
                  <button
                    onClick={() => addToFavourite(product?.id)}
                    className="absolute cursor-pointer w-[50px] h-[50px] bg-white top-[20px] right-[20px] rounded-[8px] flex items-center justify-center text-headerColor"
                  >
                    {favourite.includes(product.id) ? (
                      <img
                        src="/public/home/heart-liked.svg"
                        alt="heart"
                        width={25}
                        className="text-headerColor   fill-headerColor"
                      />
                    ) : (
                      <img
                        src="/home/heart.svg"
                        alt="heart"
                        className="text-headerColor  fill-headerColor"
                      />
                    )}
                  </button>
                  <p className="mt-[24px] text-gray-600">
                    {product?.description}
                  </p>
                  <p className="mb-[12px]">{product?.brandName}</p>
                  <h2 className="font-bold text-[20px]">
                    {product?.price} сум
                  </h2>
                  <div className="flex items-center justify-between mt-[12px]">
                    <a
                      href={`products/${product.id}`}
                      className="flex justify-center items-center w-[75%] bg-gray-100 h-[60px] text-[22px] font-bold"
                    >
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
            {products.slice(12, 24).map((product, index) => (
              <SwiperSlide key={index}>
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
                  <button
                    onClick={() => addToFavourite(product?.id)}
                    className="absolute cursor-pointer w-[50px] h-[50px] bg-white top-[20px] right-[20px] rounded-[8px] flex items-center justify-center text-headerColor"
                  >
                    {favourite.includes(product.id) ? (
                      <img
                        src="/public/home/heart-liked.svg"
                        alt="heart"
                        width={25}
                        className="text-headerColor  fill-headerColor"
                      />
                    ) : (
                      <img
                        src="/home/heart.svg"
                        alt="heart"
                        className="text-headerColor  fill-headerColor"
                      />
                    )}
                  </button>
                  <p className="mt-[24px] text-gray-600">
                    {product?.description}
                  </p>
                  <p className="mb-[12px]">{product?.brandName}</p>
                  <h2 className="font-bold text-[20px]">
                    {product?.price} сум
                  </h2>
                  <div className="flex items-center justify-between mt-[12px]">
                    <a
                      href={`products/${product.id}`}
                      className="flex justify-center items-center w-[75%] mx-auto bg-gray-100 h-[60px] text-[22px] font-bold"
                    >
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
            {categories.slice(0, 6).map((category, index) => (
              <SwiperSlide key={index}>
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

      <section id="service" className="py-[60px]">
        <div className="container">
          <h1 className="text-[32px] font-[700] mb-[42px]">
            Nega bizni tanlashadi?
          </h1>
          <Swiper
            spaceBetween={20}
            centeredSlides={false}
            slidesPerView={1}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // Breakpoints for responsive design
              768: {
                slidesPerView: 1.45,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="max-w-[967px] w-full  relative h-[265px] rounded-[20px] bg-serviceColor1">
                <p className="text-white z-10 leading-[60px] font-[500] absolute left-[100px] lg:left-[130px] top-[40px] text-[52px] w-[100px]">
                  Bepul o'rantib berish
                </p>
                <img
                  className="absolute right-[26px]"
                  src="/home/service-1.png"
                  alt="service"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" max-w-[967px] h-[265px] w-full rounded-[20px] object-cover">
                <img className="h-full" src="/home/service-2.png" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-[967px] w-full  relative h-[265px] rounded-[20px] bg-gradient-to-r from-serviceColorGradient1 to-serviceColorGradient2">
                <h1 className="absolute top-[26px] left-[30px] md:left-[48px] text-white leading-[150%] text-[40px] w-[326px]">
                  Eng to’g’ri tanlov Clean Marketda
                </h1>
                <a
                  className="absolute left-[48px] bottom-[43px] bg-white text-gray-700 font-[500] w-[204px] h-[36px] text-[20px] rounded-[50px] flex items-center justify-center"
                  href="#"
                >
                  Batafsil
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="statistics">
        <h1 className="container text-[32px] font-[700]">Biz sonlarda</h1>

        <div className="bg-gray-100 py-[42px]">
          <div className="container">
            <div className=" max-w-[1069px] overflow-hidden w-full mx-auto flex justify-center lg:justify-between flex-wrap gap-[30px] ">
              <div className="w-[195px] h-[195px] rounded-full  border-headerColor border-[2px] flex items-center justify-center flex-col">
                <h1 className="text-[60px] leading-[150%] text-headerColor">
                  40K
                </h1>
                <p className="text-[18px] text-gray-500 w-[130px] text-center">
                  nominal product
                </p>
              </div>
              <div className="w-[195px] relative h-[195px] rounded-full  border-headerColor border-[2px] flex items-center justify-center flex-col">
                <h1 className="text-[60px] leading-[150%] text-headerColor">
                  10+
                </h1>
                <p className="text-[18px] text-gray-500 w-[130px] text-center">
                  partners
                </p>
                <div className="w-[124px] h-[124px] rounded-full border-headerColor border-[2px] flex justify-center items-center flex-col absolute left-[129px] bottom-[70px] bg-gray-100">
                  <p>+</p>
                  <p className="w-[105px] text-center text-gray-600">
                    foreign partner
                  </p>
                </div>
              </div>
              <div className="w-[195px] h-[195px] rounded-full  border-headerColor border-[2px] flex items-center justify-center flex-col">
                <h1 className="text-[60px] leading-[150%] text-headerColor">
                  40K
                </h1>
                <p className="text-[18px] text-gray-500 w-[130px] text-center">
                  nominal product
                </p>
              </div>
              <div className="w-[195px] h-[195px] rounded-full  border-headerColor border-[2px] flex items-center justify-center flex-col">
                <h1 className="text-[60px] leading-[150%] text-headerColor">
                  40K
                </h1>
                <p className="text-[18px] text-gray-500 w-[130px] text-center">
                  nominal product
                </p>
              </div>
            </div>
            <p className="max-w-[1069px] text-[18px] w-full mx-auto mt-[50px] text-gray-500">
              As an effort to keep polishing our services for a more
              satisfactory customer experience, we are very happy to announce
              the establishment of our new SamAutoTrans warehouse! This stands
              as an embodiment of our striving for ever-improving
              professionalism and quality customer service.
            </p>
          </div>
        </div>
      </section>

      <section id="clean-news" className="mt-[118px] mb-[60px]">
        <div className="container">
          <div className="flex gap-[20px] items-center justify-between mb-[24px]">
            <h1 className="text-[18px] md:text-[32px] font-[700]">
              Clean market yangiliklari
            </h1>
            <a
              className="text-[14px] md:text-[18px] text-headerColor underline"
              href="news"
            >
              Barcha yangiliklar
            </a>
          </div>

          <div className="flex items-center mb-[20px] gap-[32px] border border-gray-200 rounded-[20px] lg:pr-[28px] flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-[40%]">
              <img
                className="w-full"
                src="/home/news-main.png"
                alt="news main"
              />
            </div>
            <div className="w-full lg:w-[60%] p-[20px] lg:p-0">
              <div className="flex gap-[48px] flex-wrap lg:flex-nowrap">
                <span className="flex items-center justify-center w-[140px] h-[35px]  bg-gray-100 rounded-full text-headerColor font-[500]">
                  Actual new
                </span>
                <span className="flex gap-1 items-center">
                  <img className="w-[22px]" src="/home/views.svg" alt="views" />
                  16.5k views
                </span>
                <span className="flex gap-1 items-center">
                  <img
                    className="w-[16px]"
                    src="/home/calendar.svg"
                    alt="views"
                  />
                  05.11.2022
                </span>
              </div>
              <h1 className="mt-[24px] text-[24px] font-[600] mb-[12px] ">
                Latest news
              </h1>
              <p className="text-gray-500 mb-[30px]">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we are very happy to announce
                the establishment of our new SamAutoTrans warehouse! This stands
                as an embodiment of our striving for ever-improving
                professionalism and quality customer service.As an effort to
                keep polishing our services for a more satisfactory customer
                experience, we are very happy{" "}
              </p>
              <a className="text-headerColor text-[18px]" href="news">
                read more...
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:flex sm:justify-between items-center gap-[20px] flex-wrap lg:flex-nowrap">
            <div className="max-w-[350px] mx-auto f-full border border-gray-100 rounded-[16px] p-[14px] hover:shadow">
              <img className="mb-[24px]" src="/home/news-1.png" alt="news-1" />
              <h1 className="text-[18px] font-[600] mb-[24px]">
                What should be the arrangement of furniture in the bathroom?
              </h1>
              <p className="text-gray-500 mb-[24px]">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we{" "}
              </p>
              <a className="text-[18px] text-headerColor underline" href="news">
                Read more
              </a>
            </div>
            <div className="max-w-[350px] mx-auto f-full border border-gray-100 rounded-[16px] p-[14px] hover:shadow">
              <img className="mb-[24px]" src="/home/news-2.png" alt="news-1" />
              <h1 className="text-[18px] font-[600] mb-[24px]">
                What should be the arrangement of furniture in the bathroom?
              </h1>
              <p className="text-gray-500 mb-[24px]">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we{" "}
              </p>
              <a className="text-[18px] text-headerColor underline" href="news">
                Read more
              </a>
            </div>
            <div className="max-w-[350px] mx-auto f-full border border-gray-100 rounded-[16px] p-[14px] hover:shadow">
              <img className="mb-[24px]" src="/home/news-3.png" alt="news-1" />
              <h1 className="text-[18px] font-[600] mb-[24px]">
                What should be the arrangement of furniture in the bathroom?
              </h1>
              <p className="text-gray-500 mb-[24px]">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we{" "}
              </p>
              <a className="text-[18px] text-headerColor underline" href="news">
                Read more
              </a>
            </div>
            <div className="max-w-[350px] mx-auto f-full border border-gray-100 rounded-[16px] p-[14px] hover:shadow">
              <img className="mb-[24px]" src="/home/news-4.png" alt="news-1" />
              <h1 className="text-[18px] font-[600] mb-[24px]">
                What should be the arrangement of furniture in the bathroom?
              </h1>
              <p className="text-gray-500 mb-[24px]">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we{" "}
              </p>
              <a className="text-[18px] text-headerColor underline" href="news">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="py-[60px]">
        <div className="max-w-[1260px] mx-auto">
          <h1 className=" text-[24px] text-headerColor mb-[24px] pl-[20px]">
            Bizga ishonch bildirgan kompaniyalar
          </h1>
          <div>
            <Swiper
              spaceBetween={20}
              centeredSlides={false}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                // Breakpoints for responsive design
                500: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper px-[20px]"
            >
              <SwiperSlide>
                <div className="w-max-[285px] w-full h-[112px] bg-headerColor flex justify-center items-center rounded-[20px]">
                  <img src="/home/collobrations-1.png" alt="col1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-max-[285px] w-full h-[112px] bg-headerColor flex justify-center items-center rounded-[20px]">
                  <img src="/home/collobrations-2.png" alt="col1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-max-[285px] w-full h-[112px] bg-headerColor flex justify-center items-center rounded-[20px]">
                  <img src="/home/collobrations-3.png" alt="col1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-max-[285px] w-full h-[112px] bg-headerColor flex justify-center items-center rounded-[20px]">
                  <img src="/home/collobrations-1.png" alt="col1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-max-[285px] w-full h-[112px] bg-headerColor flex justify-center items-center rounded-[20px]">
                  <img src="/home/collobrations-2.png" alt="col1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-max-[285px] w-full h-[112px] bg-headerColor flex justify-center items-center rounded-[20px]">
                  <img src="/home/collobrations-3.png" alt="col1" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section id="features" className="py-[60px]">
        <div className="container">
          <h1 className="text-[32px] font-bold mb-[35px]">F.A.Q</h1>
          <ul className="mb-[24px]">
            <li className="font-[600] text-[18px]">Разнообразие моделей</li>
            <li className="text-gray-500 text-[18px] mt-[14px] leading-[150%]">
              Коллекции, представленные в салоне, отлично сочетаются. Если вы
              хотите реализовать свой собственный дизайнерский потенциал – нет
              ничего проще. Кроме того, мы уверены, что сможем помочь вам
              воплотить в жизнь любые идеи ванных комнат. Начиная с выбора
              качественной кафельной плитки и заканчивая современными душевыми
              кабинами, или элегантными ванными на гнутых ножках.
            </li>
          </ul>
          <ul className="mb-[24px]">
            <li className="font-[600] text-[18px]">
              Oборудование Cleanmarket – всегда в тренде
            </li>
            <li className="text-gray-500 text-[18px] mt-[14px] leading-[150%]">
              Коллекции, представленные в салоне, отлично сочетаются. Если вы
              хотите реализовать свой собственный дизайнерский потенциал – нет
              ничего проще. Кроме того, мы уверены, что сможем помочь вам
              воплотить в жизнь любые идеи ванных комнат. Начиная с выбора
              качественной кафельной плитки и заканчивая современными душевыми
              кабинами, или элегантными ванными на гнутых ножках.
            </li>
          </ul>
          <ul className="mb-[24px]">
            <li className="font-[600] text-[18px]">
              Oборудование Cleanmarket – всегда в тренде
            </li>
            <li className="text-gray-500 text-[18px] mt-[14px] leading-[150%]">
              Коллекции, представленные в салоне, отлично сочетаются. Если вы
              хотите реализовать свой собственный дизайнерский потенциал – нет
              ничего проще. Кроме того, мы уверены, что сможем помочь вам
              воплотить в жизнь любые идеи ванных комнат. Начиная с выбора
              качественной кафельной плитки и заканчивая современными душевыми
              кабинами, или элегантными ванными на гнутых ножках.
            </li>
          </ul>
          <ul className="mb-[24px]">
            <li className="font-[600] text-[18px]">
              Oборудование Cleanmarket – всегда в тренде
            </li>
            <li className="text-gray-500 text-[18px] mt-[14px] leading-[150%]">
              Коллекции, представленные в салоне, отлично сочетаются. Если вы
              хотите реализовать свой собственный дизайнерский потенциал – нет
              ничего проще. Кроме того, мы уверены, что сможем помочь вам
              воплотить в жизнь любые идеи ванных комнат. Начиная с выбора
              качественной кафельной плитки и заканчивая современными душевыми
              кабинами, или элегантными ванными на гнутых ножках.
            </li>
          </ul>
        </div>
      </section>

      <section id="contacts" className="py-[60px]">
        <div className="grid grid-cols-1 gap-[20px] lg:flex lg:justify-between max-w-[1040px] w-full mx-auto px-[20px]">
          <div className="w-[100%] md:w-[50%] lg:w-[40%] h-[372px] mx-auto flex flex-col justify-between">
            <div>
              <h1 className="text-[30px] font-bold mb-[16px]">
                Biz bilan aloqa
              </h1>
              <p className="text-gray-600 leading-[22.81px]">
                Бизга алокага чикинг операторларимиз 24 соат ичида алокага
                чикади точно тел килишади ховотир омен
              </p>
            </div>
            <div>
              <p className="text-gray-500">
                Бизга алокага чикинг мессенджердан
              </p>
              <p className="text-gray-500 mb-[21px]">
                Бизнинг телефон ракамимиз: +998(93)755-04-12
              </p>
              <div className="flex items-center justify-between gap-[10px]">
                <a
                  className="flex items-center justify-center w-[174px] h-[40px] bg-headerColor text-white rounded-[12px]"
                  href="tel:"
                >
                  +998 93 755 04 12
                </a>
                <div className="flex items-center gap-[10px]">
                  <a href="#">
                    <img src="/home/media-1.png" alt="media" />
                  </a>
                  <a href="#">
                    <img src="/home/media-2.png" alt="media" />
                  </a>
                  <a href="#">
                    <img src="/home/media-3.png" alt="media" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form
            className="w-[320px] sm:w-[530px]  lg:w-[60%] flex flex-col mx-auto gap-[12px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              required
              className="hover:shadow p-[24px] outline-none w-full rounded-[12px] bg-gray-100"
              placeholder="Name and surname"
              type="text"
            />
            <input
              required
              className="hover:shadow p-[24px] outline-none w-full rounded-[12px] bg-gray-100"
              placeholder="Phone number"
              type="text"
            />
            <textarea
              className="hover:shadow p-[24px] outline-none w-full h-[132px] rounded-[12px] bg-gray-100"
              placeholder="Habaringizni yoib qoldiring"
              name=""
              id=""
            ></textarea>
            <button className="hover:shadow-lg p-[24px] text-[18px] font-bold outline-none w-full rounded-[12px] bg-headerColor text-white">
              Send all information
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage;
