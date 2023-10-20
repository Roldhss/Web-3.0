import { NavBar } from './NavBar'
export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8 mx-2">
        <h1 className='text-[40px] font-bold text-Negro'>Web 3.0</h1>
        <NavBar />
    </header>
  )
}