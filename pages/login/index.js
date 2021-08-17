import AppButton from 'components/Buttons/AppButton'
import Logo from 'components/Icons/Logo'
import {useRouter} from 'next/router'

export default function Login () {
  const router = useRouter()
  return(
    <>
      <div className="container">
      <section>
        <form>
          <h1>Iniciar Sesion</h1>
          <Logo />
          <p>Tu app de recetas digitales favorita</p>
          <label>Correo</label>
          <input type="email" />
          <label>Contraseña</label>
          <input type="password" />

          <AppButton disabled={false} onClick={router.push('/app')} type="primary">
            Iniciar Sesion
          </AppButton>
          <AppButton disabled={false} onClick={router.push('/app')} type="google">
            Continuar con Google
          </AppButton>
          <div>
            <p>
              Ya tienes una cuenta? Registrate
            </p>
          </div>
        </form>
      </section>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          background: linear-gradient(
            0deg,
            rgba(255, 105, 97, 0.9) 0%,
            rgba(38, 84, 125, 0.9) 100%
          );
          height: 100vh;
        }

  form > :global(svg) {
  }

  p {
    color: var(--gray);
    font-size: 0.8em;
    margin-bottom: 2em;
  }

  a {
    color: var(--blue);
  }

  section {
    display: flex;
    justify-content: center;
    width: 80vw;
    margin: 3em 0;
    background-color: #fff;
  }

  input {
    margin: 1.5em 0;
    border: 1px solid var(--gray);
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 1px 1px var(--orange);
  }

  form {
    background-color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 2em;
  }

  h1 {
    margin: 1em 0;
  }
      `}</style>
    </>
  )
}
