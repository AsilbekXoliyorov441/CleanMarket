import React from 'react'

const AboutPage = () => {
  return (
    <>
      <ul className="container bread-crumb flex gap-[20px] mb-[30px] my-[30px]">
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

      <div className="container pb-[60px]">
        <div className="max-w-[1200px] flex-wrap-reverse lg:flex-nowrap mx-auto gap-[20px] w-full flex items-center justify-between">
          <div className="w-[100%] lg:w-[50%]">
            <h1 className="text-[28px] font-[600] mb-[22px]">Biz haqimizda</h1>
            <p className="text-gray-700 text-[14px] leading-[150%] lg:max-w-[507px] w-full mb-[48px]">
              Вас приветствует магазин электроники MacBro. У нас вы можете найти
              всю продукцию Apple. Уже более 14 лет мы консультируем и подбираем
              нужный гаджет для наших покупателей. За время нашего существования
              на рынке мы успели оптимизировать доставку по межгороду, так что
              вы получите гаджет в течении трех дней, а если вам необходима
              доставка по городу мы доставим гаджет в течении 2 часов. 90% наших
              клиентов становятся постоянными покупателями, потому что мы даем
              гарантию на один год.
            </p>
            <div className="flex justify-between items-center gap-[20px] flex-wrap sm:flex-nowrap">
              <a
                className="w-[183px] h-[43px] flex items-center justify-center bg-mapColor rounded-[8px] text-white"
                href="tel:+998937550412"
              >
                Aloqaga chiqish
              </a>
              <a
                className="w-[183px] h-[43px] flex items-center justify-center text-mapColor bg-gray-100 rounded-[8px]"
                href="#map"
              >
                Bizning manzil
              </a>
              <div className="flex items-center gap-[20px]">
                <a
                  className="flex items-center justify-center w-[44px] h-[44px] bg-gray-100 rounded-full"
                  href="#"
                >
                  <img src="/public/home/about-telegram.png" alt="media" />
                </a>
                <a
                  className="flex items-center justify-center w-[44px] h-[44px] bg-gray-100 rounded-full"
                  href="#"
                >
                  <img src="/public/home/about-instagram.png" alt="media" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <img
              className="w-full"
              src="/public/home/about-1.png"
              alt="about"
            />
          </div>
        </div>
      </div>

      <section id="map" className='py-[60px] bg-gray-100'>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.9336810133277!2d69.2831517104991!3d41.33846677118643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e1!3m2!1sen!2s!4v1737471344102!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className='w-full h-[400px] md:h-[630px]'
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default AboutPage