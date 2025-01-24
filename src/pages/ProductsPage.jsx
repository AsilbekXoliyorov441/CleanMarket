import React, { useState } from "react";
import { categories } from "./../const/categories";
import { products } from "../const/products";

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState(200);
  const { addToFavourite, favourite } = useCart();

  return (
    <div className="container flex flex-col sm:flex-row gap-[30px] pt-[30px] pb-[60px]">
      <div className="max-w-[263px] mx-auto ">
        <a
          href="/"
          className="flex text-headerColor items-center gap-[4px] underline"
        >
          <img
            className="text-headerColor fill-headerColor w-[7px]"
            src="/home/left.svg"
            alt="left"
          />
          Ortga
        </a>
        <p className="w-[260px] mt-[25px] text-[32px] font-bold relative">
          Поломоичные машины{" "}
          <span className="absolute text-[12px] font-normal bottom-[0px] right-[10px] text-gray-400">
            2 930 товаров
          </span>
        </p>
        <p className="font-bold mb-[16px]">под категории</p>
        <div className="flex flex-col gap-[10px]">
          <button
            className="flex items-center w-full justify-between"
            onClick={() => setActiveTab(200)}
          >
            <span className="inline-block w-[110px] text-[14px] text-left">
              All
            </span>
            <img src="/home/categories-icon.png" alt="" />
          </button>
          {categories.slice(0, 4).map((tab, index) => (
            <button
              className="flex items-center w-full justify-between"
              onClick={() => setActiveTab(tab.id)}
              key={index}
            >
              <span className="inline-block w-[110px] text-[14px] text-left">
                {tab.title}
              </span>
              <img src="/home/categories-icon.png" alt="" />
            </button>
          ))}
        </div>
        <div className="mt-[26px] h-[406px] w-[227px] rounded-[12px] bg-headerColor p-[24px] flex flex-col gap-[32px] text-white text-center">
          <h3 className="text-[18px] font-bold">
            Kale bepul service va kafolat xizmati
          </h3>
          <img src="/home/service-1.png" alt="service" />
          <p className="text-[14px]">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-[32px] font-bold mb-[40px]">Mahsulotlar</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-[20px]">
          {activeTab === 200 ? (
            <>
              {products.map((product, i) => (
                <div
                  key={i}
                  className="max-w-[350px] mx-auto border border-gray-100 rounded-[14px] relative px-[14px] py-[14px]"
                >
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
                      href={`products/${product?.id}`}
                      className="w-[75%] mx-auto bg-gray-100 h-[60px] text-[22px] font-bold flex items-center justify-center"
                    >
                      Xarid qilish
                    </a>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {products.map((product, i) =>
                activeTab === product?.categoryId ? (
                  <div
                    key={i}
                    className="max-w-[350px] mx-auto border border-gray-100 rounded-[14px] relative px-[14px] py-[14px]"
                  >
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
                      <a
                        href={`products/${product.id}`}
                        className="w-[75%] mx-auto bg-gray-100 h-[60px] text-[22px] font-bold flex items-center justify-center"
                      >
                        Xarid qilish
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
