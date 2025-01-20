import React, { useState } from "react";
import { categories } from "./../const/categories";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const [activeTab, setActiveTab] = useState(200);
  const navigate = useNavigate()
  return (
    <div className="container flex flex-col sm:flex-row gap-[30px] pt-[30px] pb-[60px]">
      <div className="max-w-[263px] mx-auto ">
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
        <p className="w-[260px] mt-[25px] text-[32px] font-bold relative">
          Поломоичные машины{" "}
          <span className="absolute text-[12px] font-normal bottom-[0px] right-[10px] text-gray-400">
            2 930 товаров
          </span>
        </p>
        <p className="font-bold mb-[16px]">Категории</p>
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
          {categories.slice(0, 4).map((tab) => (
            <button
              className="flex items-center w-full justify-between"
              onClick={() => setActiveTab(tab.id)}
              key={tab}
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
        <h1 className="text-[32px] font-bold mb-[40px]">Kategoriyalar</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-[20px]">
          {activeTab === 200 ? (
            <>
              {categories.slice(0, 12).map((category) => (
                <div className="max-w-[350px] w-full  mx-auto border border-gray-100 rounded-[24px] relative overflow-hidden">
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
              ))}
            </>
          ) : (
            <>
              {categories.map((category) =>
                activeTab === category.id ? (
                  <div className="max-w-[350px] w-full mx-auto border border-gray-100 rounded-[24px] relative overflow-hidden">
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

export default CategoriesPage;
