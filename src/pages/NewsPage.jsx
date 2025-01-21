import React from "react";

const NewsPage = () => {
  return (
    <>
      <section id="main-new">
        <div className="container">
          <ul className="bread-crumb flex gap-[20px] my-[30px]">
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
          <h1 className="text-[32px] font-[600] mb-[32px]">
            Yangilik nomi zagolovka
          </h1>
          <div className="mb-[32px]">
            <img
              className="w-full"
              src="/home/news-main-hero.png"
              alt="news"
            />
          </div>
          <span className="inline-block text-[18px] text-gray-500 mb-[12px]">
            Yangilik chiqqan vaqti:
          </span>
          <h3 className="text-[24px] font-[500]  mb-[32px]">21.05.2023</h3>
          <p className="text-[18px] leading-[150%] text-gray-500 mb-[120px]">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.simply dummy text of the printing and typesetting industry.{" "}
          </p>
        </div>
      </section>
      <section id="clean-news" className="mt-[118px] mb-[60px]">
        <div className="container">
          <h1 className="text-[18px] md:text-[32px] font-[700] mb-[32px]">
            Boshqa yangiliklar
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:flex sm:justify-between items-center gap-[20px] flex-wrap lg:flex-nowrap">
            <div className="max-w-[350px] mx-auto f-full border border-gray-100 rounded-[16px] p-[14px] hover:shadow">
              <img
                className="mb-[24px]"
                src="/home/news-image.png"
                alt="news-1"
              />
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
              <img
                className="mb-[24px]"
                src="/home/news-image.png"
                alt="news-1"
              />
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
              <img
                className="mb-[24px]"
                src="/home/news-image.png"
                alt="news-1"
              />
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
              <img
                className="mb-[24px]"
                src="/home/news-image.png"
                alt="news-1"
              />
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
    </>
  );
};

export default NewsPage;
