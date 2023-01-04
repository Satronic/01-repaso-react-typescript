import { useState } from "react"

export const useCounter = (valorInicial: number) => {

  const [contador, setContador] = useState(valorInicial)

  const acumular = (valor: number) => {
    setContador(contador + valor)
  }
  
  return {
    contador,
    acumular
  }
}
