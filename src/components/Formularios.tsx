import { useForm } from '../hooks/useForm';


export const Formularios = () => {

  const { formulario, onChange } = useForm({
    email: '',
    password: ''
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="E-mail"
        value={formulario.email}
        onChange={(event) => onChange(event.target.value, 'email')}
      />

      <input
        type="text"
        className="form-control"
        placeholder="password"
        value={formulario.password}
        onChange={(event) => onChange(event.target.value, 'password')}
      />
    </>
  )
}
