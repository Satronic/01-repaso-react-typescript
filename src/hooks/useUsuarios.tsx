import { useState, useRef, useEffect } from 'react';
import { ListadoUsuarios, Usuario } from '../interfaces/api';
import { API } from '../api/req-res';


export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  const paginaRef = useRef(1);

  console.log(paginaRef);

  useEffect(() => {
    cargarUsuarios();
    console.log('useEffect')
  }, [])

  const cargarUsuarios = async () => {

    try {

      const response = await API.get<ListadoUsuarios>('/users', {
        params: {
          page: paginaRef.current
        }
      });

      if (response.data.data.length > 0) {
        setUsuarios(response.data.data);
      } else {
        alert('No hay mas registros');
        paginaRef.current--;
      }

    } catch (error) {
      console.log(error);
    }
  }
  
  const irPaginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
    cargarUsuarios();
    }
  }

  const irPaginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  }


  return {
    usuarios,
    irPaginaAnterior,
    irPaginaSiguiente
  }
}
