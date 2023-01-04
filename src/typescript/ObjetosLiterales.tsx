interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion
}

interface Direccion {
  pais: string,
  departamento: string,
  ciudad: string
}

export const ObjetosLiterales = () => {

const persona: Persona = {
  nombre: 'Sneider',
  edad: 39,
  direccion: {
    pais: 'Colombia',
    departamento: 'Cundinamarca',
    ciudad: 'Tena'
  }
}

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          { JSON.stringify(persona, null, 2) }
        </pre>
      </code>
    </>
  )
}
