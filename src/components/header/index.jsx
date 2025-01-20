import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [location, setLocation] = useState("Toshkent");
  const [visible, setVisible] = useState(false);
  const listRef = useRef(null);

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
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header-top bg-headerColor h-[64px] flex items-center">
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
      <div className="header-bottom h-[44px] flex items-center bg-gray-100">
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
              {viloyatlar.map((viloyat) => (
                <li
                  className={
                    viloyat === location
                      ? "bg-slate-400 pointer px-2 rounded-[2px]"
                      : "hover:bg-slate-200 hover:text-headerColor pointer px-2 rounded-[2px]"
                  }
                  key={viloyat}
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
      <div className="container my-[12px] flex items-center justify-between md:justify-normal">
        <a href="#" className="hidden lg:block">
          <img
            className="w-[62px] lg:w-[62px] "
            src="/public/home/logo.png"
            alt="logo"
          />
        </a>
        <button className="flex items-center text-[18px] text-headerColor gap-[8px]  lg:ml-[60px] px-[14px] py-[10px] bg-gray-100 rounded-[8px]">
          <img src="/home/toggle.png" alt="toggle" />
          Katalog
        </button>
        <form
          action=""
          className="h-[44px] max-w-[149px] md:max-w-[400px] lg:max-w-[549px] w-full md:ml-[18px] overflow-hidden border border-gray-200 rounded-[8px] flex justify-between items-center"
        >
          <input type="text" className="w-[80%] h-[100%] outline-none px-5" />
          <button className="bg-gray-100 flex items-center justify-center w-[20%] h-[100%]">
            <img src="/home/search.svg" alt="search" />
          </button>
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
    </header>
  );
};

export default Header;
