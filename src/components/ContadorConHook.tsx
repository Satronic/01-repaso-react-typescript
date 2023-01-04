
import { useCounter } from '../hooks/useCounter';

export const ContadorConHooks = () => {

  const { contador, acumular} = useCounter(10)

  return (
    <>
      <h3>Contador con Hooks: </h3>
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
