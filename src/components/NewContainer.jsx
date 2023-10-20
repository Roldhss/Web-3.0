import { NewArticle } from "./NewArticle";
import React from 'react'

export const NewContainer = () => {
  return (
    <aside className="bg-Concrete py-[28px] px-[20px] min-w-[280px] max-h-[580px]">
        <h1 className="text-Negro text-4xl font-bold">Noticias</h1>
        <NewArticle 
            title='La nueva frontera de la Web 3.0'
            text='¿Cómo la Web 3.0 cambiará el Internet?'
        />
        <NewArticle 
            title='La revolución de la propiedad digital'
            text='La nueva forma de proteger la propiedad intelectual'
        />
        <NewArticle 
            title='El futuro de Internet'
            text='IA: La clave del futuro de Internet'
        />
    </aside>
  )
}