
export const Article = ({img, number, title, text}) => {
  return (
    <article className='flex h-[162px] md:w-[343px] md:flex-grow'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt="Imagen de computadoras retro"/>
        </div>
        <div className='pl-6'>
            <p className='text-Concrete text-3xl mb-[18px] font-bold'>{number}</p>
            <h2 className='font-bold mb-[18px] hover:text-Fire cursor-pointer'>{title}</h2>
            <p className='text-Negro'>{text}</p>
        </div>
    </article>
  )
}
