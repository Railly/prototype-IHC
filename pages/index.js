import LandingButton from 'components/Buttons/LandingButton'
import Illustration from 'components/Icons/Illustration'
import BurguerMenu from 'components/Icons/BurguerMenu'
import Logo from 'components/Icons/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { device } from 'styles/devices'

export default function Home () {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const currentPage = (path) => {
    return pathname === path ? 'current_page' : ''
  }
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <nav>
        <ul>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div>
            <li>
              <Link href="/">
                <a onClick={handleClick} className={currentPage('/')}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a onClick={handleClick} className={currentPage('/services')}>
                  Servicios
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a onClick={handleClick} className={currentPage('/pricing')}>
                  Precios
                </a>
              </Link>
            </li>
          </div>
          <BurguerMenu onClick={handleClick} />
        </ul>
      </nav>
      <main>
        <section>
          <h1>
            Foody es donde tus comidas
            <br /> se organizan 🍓
          </h1>
          <p>
            Foody te ayuda a organizar, planificar y compartir tus
            <br />
            recetas favoritas con cualquier persona.
            <br /> Crea tu cuenta y empieza tu nuevo estilo de vida!
          </p>
          <div className="buttons">
            <LandingButton type="primary" toPath="/login">
              PRU&Eacute;BALO GRATIS
            </LandingButton>
            <LandingButton type="secondary" toPath="/login">
              INICIAR SESI&Oacute;N
            </LandingButton>
          </div>
        </section>
        <Illustration />
      </main>
      <style jsx>{`
        .buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        h1 {
          font-size: 2em;
          font-weight: 600;
          margin: 0;
        }

        p {
          padding-top: 2em;
          font-size: 1em;
          font-weight: 600;
          color: var(--gray);
          margin: 0;
        }

        main {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        main > :global(svg) {
          width: 22em;
        }

        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;
        }

        li {
          list-style: none;
          display: flex;
          align-items: center;
        }

        ul {
          display: flex;
        }

        div {
          display: flex;
          justify-content: space-around;
          width: 80%;
        }

        nav {
          margin: 3em;
        }

        ul > :global(svg) {
          display: none;
        }

        .current_page {
          color: #ff6961;
        }

        @media ${device.mobileL} {
          ul > :global(svg) {
            display: block;
            margin-left: 2em;
          }

          div {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            padding: 1.8em;
            background-color: var(--orange);
            height: 100vh;
            width: 50%;
            transform: ${open ? 'translateX(0px)' : 'translateX(-300px)'};
            transition: 0.5s ease-in-out;
          }

          ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100vw;
          }

          li {
            border-bottom: 1px solid var(--white);
            padding: 1em;
            margin-top: 5em;
          }
          .current_page {
            color: var(--white);
          }
          nav {
            display: flex;
            align-items: center;
          }
        }

        @media ${device.laptopL} {
          main > :global(svg) {
            width: auto;
          }
        }

        @media ${device.laptop} {
          main > :global(svg) {
            height: 15em;
            margin-bottom: 3em;
          }
          main {
            flex-direction: column-reverse;
          }
          section {
            padding: 0;
          }
        }

        @media ${device.mobileL} {
          main > :global(svg) {
            display: none;
          }
          h1 {
            font-size: 1.5em;
          }
          p {
            font-size: 0.8em;
          }
        }

      `}</style>
    </>
  )
}
