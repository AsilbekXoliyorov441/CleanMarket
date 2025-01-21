import React, { useEffect, useRef, useState } from "react";
import { categories } from "../../const/categories";
import { products } from "../../const/products";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [location, setLocation] = useState("Toshkent");
  const [visible, setVisible] = useState(false);
  const listRef = useRef(null);
  const [catalogChange, setCatalogChange] = useState(false);
  const [catId , setCatId] = useState(1)
    const [catTitle, setCatTitle] = useState("Поломоичные Машины");
    const [searchValue , setSearchValue] = useState("")
    const [productId , setProductId] = useState(0);
    const [visibleSearchPanel , setVisibleSearchPanel] = useState(false)

    const search = products
                .filter((item) =>
                  item.brandName.toLowerCase().includes(searchValue.toLowerCase())
                )

    console.log(searchValue);

    const navigate = useNavigate();

    const handleNavigate = (id) => {
      navigate(`products/${id}`)
    }




  const viloyatlar = [
    "Andijon",
    "Buxoro",
    "Farg‘ona",
    "Jizzax",
    "Qashqadaryo",
    "Qoraqalpog‘iston",
    "Navoiy",
    "Namangan",
    "Samarqand",
    "Sirdaryo",
    "Surxondaryo",
    "Toshkent",
  ];

  const handleLocation = (viloyat) => {
    setLocation(viloyat);
  };

  const changeVisibleLocation = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setVisible(false); // `ul`ni yashirish
        setVisibleSearchPanel(false);
        setSearchValue("")
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const productsFilter = products.filter((product) => product.categoryId === +catId);
  return (
    <header className="pb-[200px]">
      <div className="fixed top-0 w-full z-50 header-top bg-headerColor h-[64px] flex items-center">
        <div className="container flex items-center justify-between mx-auto px-5">
          <p className="text-[18px] text-white">
            <span className="hidden sm:inline-block">
              Clean Market dan siz uchun maxsus
            </span>{" "}
            <span className="inline-block font-bold"> -10% Chegirma</span>
          </p>
          <button className="w-[140px] h-[36px] rounded-[4px] text-[16px] bg-white text-headerColor">
            Bonusni olish
          </button>
        </div>
      </div>
      <div className="fixed top-[64px] w-full z-40 header-bottom h-[44px] flex items-center bg-gray-100">
        <div className="container relative flex items-center justify-between gap-[42px]">
          <div className="flex items-center">
            <span className="flex items-center gap-1">
              <img src="/header/location.svg" alt="location" />
              Lokatsiya:
            </span>
            <span className="ml-1" onClick={changeVisibleLocation}>
              {location}
            </span>
          </div>
          {visible ? (
            <ul
              ref={listRef}
              className="bg-headerColor text-white absolute px-1  w-[150px]  py-2 rounded-[5px] top-10 left-[103px] z-[99999999]"
            >
              {viloyatlar.map((viloyat, index) => (
                <li
                  className={
                    viloyat === location
                      ? "bg-slate-400 pointer px-2 rounded-[2px]"
                      : "hover:bg-slate-200 hover:text-headerColor pointer px-2 rounded-[2px]"
                  }
                  key={index}
                  onClick={() => {
                    handleLocation(viloyat);
                    changeVisibleLocation();
                  }}
                >
                  {viloyat}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}

          <ul className="flex items-center gap-[42px]">
            <li className=" hidden lg:block">
              <a href="#" className="flex items-center gap-[3.5px]">
                <img src="/header/instagram.svg" alt="instagram" />
                Cleanmarket_uz
              </a>
            </li>
            <li className="hidden lg:block">
              <a href="#" className="flex items-center gap-[3.5px]">
                <img src="/header/telegram.svg" alt="instagram" />
                t.me/Clean_market
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="tel:" className="text-headerColor font-bold">
                +998 71 200 7 002
              </a>
            </li>
            <li className="flex items-center pointer">
              <select className="bg-transparent outline-none" name="" id="">
                <option className="bg-headerColor text-white" value="">
                  Rus
                </option>
                <option className="bg-headerColor text-white" value="">
                  Uzb
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white fixed top-[108px] w-full z-10">
        <div className="container py-[12px] flex  items-center justify-between md:justify-normal">
          <a href="/" className="hidden lg:block">
            <img
              className="w-[62px] lg:w-[62px] "
              src="/home/logo.png"
              alt="logo"
            />
          </a>
          <button
            onClick={() => setCatalogChange(!catalogChange)}
            className="flex items-center text-[18px] text-headerColor gap-[8px]  lg:ml-[60px] px-[14px] py-[10px] bg-gray-100 rounded-[8px]"
          >
            <img
              width={20}
              src={catalogChange ? "/home/close.svg" : `/home/toggle.png`}
              alt="toggle"
            />
            Katalog
          </button>
          <form
            onClick={(e) => e.preventDefault()}
            action=""
            className=" h-[44px] max-w-[149px] md:max-w-[400px] lg:max-w-[549px] w-full md:ml-[18px] overflow-hidden border border-gray-200 rounded-[8px] flex justify-between items-center"
          >
            <input
            value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value), setVisibleSearchPanel(true);
              }}
              type="text"
              className="w-[80%] h-[100%] outline-none px-5"
            />
            <button className="bg-gray-100 flex items-center justify-center w-[20%] h-[100%]">
              <img src="/home/search.svg" alt="search" />
            </button>
            {search.length !== 0 ? (
              <>
                {searchValue === "" ? (
                  ""
                ) : (
                  <>
                    {visibleSearchPanel ? (
                      <div
                        ref={listRef}
                        className="overflow-y-scroll flex flex-col gap-[10px]  md:p-[10px] max-h-[300px] absolute z-10 bg-white top-[60px] border shadow-xl max-w-[149px] md:max-w-[400px] lg:max-w-[549px] w-full rounded-[8px]"
                      >
                        {search.map((pro, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              handleNavigate(pro.id), setSearchValue("");
                            }}
                            className="flex items-center gap-[25px] rounded-[8px] bg-gray-100"
                          >
                            <div className="w-[35px] md:w-[60px]">
                              <img
                                className="w-full"
                                src={pro?.image}
                                alt={pro.title}
                              />
                            </div>
                            <h1 className="text-headerColor md:text-[22px] md:w-[30%]">
                              {pro.brandName}
                            </h1>
                            <div className="hidden md:flex md:flex-col md:text-[14px] md:w-[50%]">
                              <div>{pro.title}</div>
                              <div>{pro.price}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </>
            ) : (
              <div className="overflow-y-scroll flex flex-col gap-[10px]  md:p-[10px] max-h-[300px] absolute z-10 bg-white top-[60px] border shadow-xl max-w-[149px] md:max-w-[400px] lg:max-w-[549px] w-full rounded-[8px]">
                <h1 className="text-center text-[16px] text-gray-400">
                  {" "}
                  No result
                </h1>
              </div>
            )}
          </form>
          <a
            href="/famous"
            className="md:ml-[98px] flex items-center gap-[12px] relative"
          >
            <img src="/home/heart.svg" alt="heart" />
            <span className="absolute  bg-headerColor h-[14px] w-[14px] text-[10px] flex items-center justify-center text-white rounded-full top-0 left-4">
              2
            </span>
            <span className="hidden sm:inline-block">Sevimlilar</span>
          </a>
        </div>
      </div>
      <div className="container px-0 relative">
        <div
          className={`flex items-start absolute p-[20px] transition-all rounded-b-[12px] w-full bg-white shadow-lg ${
            catalogChange ? "top-[175px]" : "top-[-1300px]"
          } z-[5]`}
        >
          <div className="overflow-y-scroll max-h-[500px]">
            {categories.map((el, index) => (
              <h1
                key={index}
                onClick={() => {
                  setCatTitle(el.title), setCatId(el.id);
                }}
                className={`p-[10px] cursor-pointer rounded-[5px] hover:bg-gray-200 w-full ${
                  el.title === catTitle ? "bg-gray-400" : ""
                }`}
              >
                {el.title}
              </h1>
            ))}
          </div>
          <span className="w-[2px] max-h-[1200px] h-full mx-[20px] bg-gray-300 inline-block"></span>
          <div className="absolute cursor-pointer sm:static bg-white shadow-2xl md:shadow-none left-[100px] grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {productsFilter.length !== 0 ? (
              <>
                {productsFilter.map((el, index) => (
                  <div
                    onClick={() => {
                      handleNavigate(el.id), setCatalogChange(false);
                    }}
                    key={index}
                    className=" flex items-center"
                  >
                    <div className="bg-gray-300 w-[100px] flex  mx-auto md:max-w-[100px] md:w-full h-[100px] rounded-l-[12px]">
                      <img
                        className="w-full object-contain"
                        src={el.image}
                        alt={el.title}
                      />
                    </div>
                    <div className="flex flex-col  justify-center w-full gap-[10px] border h-[100px] p-[10px] ">
                      <h1>{el.title}</h1>
                      <h1 className="hidden md:block">{el.description}</h1>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1 className="text-[32px] text-headerColor">
                There is no product
              </h1>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
