import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../const/products'

const CartPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const singleProduct = products.filter((product) => product.id == id)[0];
  const [selectImage , setSelectImage] = useState(singleProduct?.image)

  
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
                src="/public/home/left.svg"
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
        <div>{singleProduct.description}{singleProduct.brandName}</div>
        <div className='mt-[40px]'>
          <img className='max-w-[473px] w-full object-contain' src={selectImage} alt="image" />
          <div className="flex gap-[20px]">
            <button onClick={() => setSelectImage(singleProduct.image)} className= 'border rounded-[8px] p-[5px] max-w-[103px] w-full overflow-hidden'>
              <img src={singleProduct.image} alt="image" className='hover:scale-150 hover:transition-[1s] transition-[1s]' />
            </button>
            <button onClick={() => setSelectImage(singleProduct.image)} className= 'border rounded-[8px] p-[5px] max-w-[103px] w-full overflow-hidden'>
              <img src={singleProduct.image} alt="image" className='hover:scale-150 hover:transition-[1s] transition-[1s]' />
            </button>
            <button onClick={() => setSelectImage(singleProduct.image)} className= 'border rounded-[8px] p-[5px] max-w-[103px] w-full overflow-hidden'>
              <img src={singleProduct.image} alt="image" className='hover:scale-150 hover:transition-[1s] transition-[1s]' />
            </button>
            <button onClick={() => setSelectImage(singleProduct.image)} className= 'border rounded-[8px] p-[5px] max-w-[103px] w-full overflow-hidden'>
              <img src={singleProduct.image} alt="image" className='hover:scale-150 hover:transition-[1s] transition-[1s]' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage