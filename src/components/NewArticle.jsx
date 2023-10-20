import React from 'react'

export const NewArticle = ({title, text}) => {
  return (
    <article className='min-h-[85px] max-h-[166] border-b-2 border-Denim py-4 last:border-none lg:h-[160px] lg:py-4'>
        <h2 className='cursor-pointer hover:text-Fire text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]'>{title}</h2>
        <p className='text-[15px]'>{text}</p>
    </article>
  )
}
