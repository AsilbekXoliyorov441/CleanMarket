import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-headerColor">
      <div className="container py-[40px] flex sm:justify-between justify-center md:items-center gap-[20px] text-white flex-wrap">
        <ul className="w-[226px] flex flex-col gap-[20px]">
          <li className="text-[18px]">
            Cleanmarket - Siz va yaqinlaringiz uchun!{" "}
          </li>
          <li className="text-[14px] text-white">
            Aloqa uchun <br />
            <a className="text-[24px] text-white" href="tel:">
              +998 99 860 60 60
            </a>
          </li>
          <li className="flex items-center gap-[7px]">
            <img src="/home/footer-location.png" alt="location" />
            <a className="underline" href="#">
              Bizning do'konlar
            </a>
          </li>
          <li className="flex items-center gap-[7px]">
            <img src="/home/footer-message.png" alt="message" />
            <a href="email:">info@cleanmarket.uz</a>
          </li>
          <li className="flex items-center gap-[20px]">
            <a href="#">
              <img src="/home/footer-instagram.png" alt="instagram" />
            </a>
            <a href="#">
              <img src="/home/footer-facebook.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/home/footer-youtube.png" alt="youtube" />
            </a>
            <a href="#">
              <img src="/home/footer-telegram.png" alt="" />
            </a>
          </li>
        </ul>

        <ul className='flex flex-col gap-[16px]'>
          <li className="text-[18px] font-bold">Maxsulotlar</li>
          <li>Dush va dush sistemalari</li>
          <li>Vanna va keramika</li>
          <li>Smestitel</li>
        </ul>

        <ul className='flex flex-col gap-[16px]'>
          <li className="text-[18px] font-bold">Malumotlar</li>
          <li>Yetkazib berish</li>
          <li>Bizning loyihalar</li>
          <li>Kompaniya haqida</li>
        </ul>

        <a className="max-w-[288px]" href="#">
          <img src="/home/footer-logo.png" alt="logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer