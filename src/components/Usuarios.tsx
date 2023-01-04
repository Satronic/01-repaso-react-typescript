// import { API } from '../api/req-res';
// import { useEffect, useRef, useState } from 'react';
import { Usuario } from '../interfaces/api';
import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {

  const { usuarios, irPaginaAnterior, irPaginaSiguiente } = useUsuarios();
  

  const renderUsuario = ({ id, first_name, last_name, email, avatar }: Usuario) => {
    return (
      <tr key={id}>
        <td>
          <img src={avatar} alt={first_name} width="64px" />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(usuario => {
              return renderUsuario(usuario);
            })
          }
        </tbody>
      </table>

      <button onClick={irPaginaAnterior}>
        Anterior
      </button>

      <button onClick={irPaginaSiguiente}>
        Siguiente
      </button>
    </>
  )
}
