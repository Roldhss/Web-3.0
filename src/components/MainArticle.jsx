import React from 'react'
import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    <section className='mb-9'>
      <picture>
        <source media='(max-width: 640px' srcSet={imageMobile}/>
        <source media='(min-width: 641px' srcSet={imageDesktop}/>
        <img src={imageMobile} alt='Articulo principal imagen' />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-3'>
        <h2 className='text-[40px] font-bold text-Negro sm:text-[58px] leading-none'>La Web 3.0: el poder del usuario</h2>
        </div>
        <div className='flex-1 pt-6'>
          <p className='text-[13px] text-Negro mb-7 sm:text-[17px]'>La Web 3.0 se basa en la tecnología blockchain, que permite a los usuarios almacenar y compartir sus datos de forma descentralizada. Esto significa que los usuarios tienen mayor control sobre sus datos y mayor privacidad.</p>
          <button className='bg-Fire w-[185px] h-[48px] uppercase text-Light font-medium hover:bg-FireHover'>Sepa más</button>
        </div>
      </div>
    </section>
  )
}
