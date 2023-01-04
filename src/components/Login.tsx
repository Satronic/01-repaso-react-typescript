import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: '',
  nombre: ''
}

type LoginPayload = {
  userName: string;
  nombre: string;
}

type AuthAction = | { type: 'logout' } | { type: 'login', payload: LoginPayload }


const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        ...state,
        validando: false,
        token: null
      }

    case 'login':
      const { userName, nombre } = action.payload;
      return {
        ...state,
        validando: false,
        token: 'abd123',
        userName,
        nombre
      }

    default:
      return state;
  }
}



export const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        userName: 'Satronic',
        nombre: 'Sneider',
      }
    });
  }

  const logout = () => {
    dispatch({
      type: 'logout'
    });
  }

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando...
        </div>
      </>
    )
  }


  return (
    <>
      <h3>Login</h3>

      {
        state.token
          ? <div className="alert alert-success">Autenticado como: {state.userName}</div>
          : <div className="alert alert-danger">No autenticado</div>
      }
      
      {
        state.token
          ? <button className="btn btn-danger m-2" onClick={ logout }>Logout</button>
          : <button className="btn btn-primary m-2" onClick={ login }>Login</button>
      }

    </>
  )
}
