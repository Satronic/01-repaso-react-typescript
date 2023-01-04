

export const TiposBasicos = () => {

  const nombre: string = 'Sneider'
  const edad: number = 39
  const estado: boolean = true
  const talentos: string[] = ['creatividad', 'inteligencia']



  return (
    <>
      <h3>Tipos Basicos</h3>
      { nombre } { edad }
      <br />
      { estado ? 'activo' : 'inactivo' }
      <br />
      { talentos.join(', ') }
    </>
  )
}
