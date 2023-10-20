import burgerMenu from '../assets/images/menu.svg'

export const NavBar = () => {
  return (
    <>
        <ul className="hidden font-medium sm:flex text-[19px] sm:w-[438px] sm:place-content-around sm:text-4 sm:items-center">
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#">Noticias</a>
            </li>
            <li>
                <a href="#">Espectáculos</a>
            </li>
            <li>
                <a href="#">Categorías</a>
            </li>
        </ul>
        <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu imagen" />
    </>
  )
}