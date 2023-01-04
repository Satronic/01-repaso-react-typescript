import React, { useState } from 'react';

export const Contador = () => {

  const [contador, setContador] = useState(0)

  const acumular = (valor: number) => {
    setContador(contador + valor)
  }

  return (
    <>
      <h3>Contador</h3>
      <button 
        className='btn btn-primary'
        onClick={() => acumular(-1)}
      >-1</button>
        <small className='p-3'>{ contador }</small>
      <button 
        className='btn btn-primary'
        onClick={() => acumular(+1)}
      >+1</button>
    </>
  )
}
