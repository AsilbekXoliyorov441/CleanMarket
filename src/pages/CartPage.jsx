import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../const/products";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";


const CartPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [callback , setCallback] = useState(false)
  const singleProduct = products.filter((product) => product.id == id)[0];
  const [selectImage, setSelectImage] = useState(singleProduct?.image);

  useEffect(() => {
    setSelectImage(singleProduct.image)
  } , [id])

  return (
    <section id="cart" className="pt-[36px] pb-[60px]">
      <div className="container">
        <ul className="bread-crumb flex gap-[20px] mb-[30px]">
          <li>
            <button
              onClick={() => navigate(-1)}
              className="flex text-headerColor items-center gap-[4px] underline"
            >
              <img
                className="text-headerColor fill-headerColor w-[7px]"
                src="/home/left.svg"
                alt="left"
              />
              Ortga
            </button>
          </li>
          <li>
            <a
              className="text-[14px] bg-slate-100 py-[5px] px-[10px] rounded-[4px]"
              href="/"
            >
              Home Page
            </a>
          </li>
          <li>
            <a
              className="text-[14px] bg-slate-100 py-[5px] px-[10px] rounded-[4px]"
              href="/categories"
            >
              Barcha categoriyalar
            </a>
          </li>
        </ul>
        <div>
          {singleProduct.description}
          {singleProduct.brandName}
        </div>
        <div className="flex justify-between flex-wrap sm:flex-nowrap gap-[20px] mt-[40px]  ">
          <div className="flex flex-wrap lg:flex-nowrap  gap-[10px]">
            <div className=" relative">
              <img
                className="max-w-[473px] w-full bg-gray-50 rounded-[12px] mb-[12px] object-contain"
                src={selectImage}
                alt="image"
              />
              {singleProduct.discount ? (
                <p className="absolute top-[16px] left-[16px] bg-headerColor text-white font-bold rounded-full px-[10px] py-[5px]">
                  -{singleProduct?.discount} % chegirma
                </p>
              ) : (
                ""
              )}
              <div className="flex gap-[20px]">
                <button
                  onClick={() => setSelectImage(singleProduct.image)}
                  className="border rounded-[8px] p-[5px] max-w-[103px] w-full overflow-hidden"
                >
                  <img
                    src={singleProduct.image}
                    alt="image"
                    className="hover:scale-150 hover:transition-[1s] transition-[1s]"
                  />
                </button>
                <button
                  onClick={() => setSelectImage(singleProduct.image)}
                  className="border rounded-[8px] p-[5px] max-w-[103px] w-full overflow-hidden"
                >
                  <img
                    src={singleProduct.image}
                    alt="image"
                    className="hover:scale-150 hover:transition-[1s] transition-[1s]"
                  />
                </button>
                <button
                  onClick={() => setSelectImage(singleProduct.image)}
                  className="border rounded-[8px] p-[5px] max-w-[103px] w-full overflow-hidden"
                >
                  <img
                    src={singleProduct.image}
                    alt="image"
                    className="hover:scale-150 hover:transition-[1s] transition-[1s]"
                  />
                </button>
                <button
                  onClick={() => setSelectImage(singleProduct.image)}
                  className="border rounded-[8px] p-[5px] max-w-[103px] w-full overflow-hidden"
                >
                  <img
                    src={singleProduct.image}
                    alt="image"
                    className="hover:scale-150 hover:transition-[1s] transition-[1s]"
                  />
                </button>
              </div>
            </div>
            <div className="max-w-[410px] w-full">
              <h2 className="font-bold text-[18px]">
                Maxsulot xarakteristikasi
              </h2>
              <ul className="text-gray-500 ">
                <li>Характеристики: Емкость баков: 14/14 л</li>
                <li>
                  Вакуумный мотор: 2-х стадийный, 1500 Вт, 3000 мм H2O, 50 л/сек
                </li>
                <li>
                  Водяной насос с байпасом: вибрационный, 70 Вт, 4 бар, 1,5
                  л/мин
                </li>
                <li>Ширина уборки: 100 ммКоличество форсунок:</li>
                <li>оличество форсунок: 1Нагреватель воды: 180 Вт</li>
                <li>Производительность: 60 м кв./час </li>
                <li>Длина кабеля: 10 м </li>
                <li>Длина шланга: 2,5 м </li>{" "}
                <li>Масса нетто/брутто: 12/15 кг</li>{" "}
                <li>Габариты/Габариты упаковки: 30х42х53 / 34х53х70 см </li>
                <li>
                  Комплект поставки: шланги H10-RAGNO-M + ручная пластмассовая
                  насадка NS10PN-M
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[350px] w-full h-[315px] border p-[20px] rounded-[16px]">
            <p className="text-[24px] text-headerColor font-bold">
              {singleProduct.price} so'm
            </p>
            <ul className="flex mt-[10px] flex-col gap-[10px] text-gray-500">
              <li>O'rnatib berish</li>
              <li>Yetkazib berish</li>
              <li>Service xizmati</li>
            </ul>
            <a href="https://t.me/Xoliyorov_Asilbek" className="flex items-center cursor-pointer justify-center max-w-[314px] w-full h-[50px] text-white bg-headerColor rounded-[12px] mt-[50px] ">
              Hoziroq xarid qiling
            </a>
          </div>
        </div>
        <div className="mt-[60px]">
          <h1 className="text-[18px] font-[500] mb-[20px]">
            Maxsulot haqida batafsil
          </h1>
          <p className="max-w-[1090px] w-full text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex justify-between items-center mt-[60px] mb-[20px]">
          <h1 className="text-[22px] md:text-[32px] font-[500]">O’xshash mahsulotlar</h1>
          <a className="text-headerColor underline text-[18px] " href="/products">Barchasi</a>
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
          {products.slice(id ,  24).map((product) => (
            <SwiperSlide key={product.id}>
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
                <h2 className="font-bold text-[20px]">{product?.price} сум</h2>
                <div className="flex items-center justify-between mt-[12px]">
                  <a
                    href={`${product.id}`}
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
      </div>
    </section>
  );
};

export default CartPage;
