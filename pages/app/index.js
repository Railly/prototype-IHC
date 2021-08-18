import AppButton from 'components/Buttons/AppButton'
import Avatar from 'components/Avatar'
import Books from 'components/Icons/Books'
import BurguerMenu from 'components/Icons/BurguerMenu'
import Calendar from 'components/Icons/Calendar'
import Cookbook from 'components/Cookbook'
import Feedback from 'components/Icons/Feedback'
import FourCharacters from 'components/Icons/FourCharacters'
import Link from 'next/link'
import Logo from 'components/Icons/Logo'
import Logout from 'components/Icons/Logout'
import Search from 'components/Icons/Search'
import Settings from 'components/Icons/Settings'
import Modal from 'components/Modal'
import { device } from 'styles/devices'
import { useRouter } from 'next/router'
import { useState } from 'react'

const cookbooks = [
  {
    id: 0,
    name: "Libro de prueba"
  }
]

export default function App () {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 25fr 45fr' }}>
          <nav>
            <ul>
            <Avatar alt={"Railly Hugo"} src="/profile.webp" />
            <div className="main_options">
                <li>
                <Link href="/app">
                    <a>
                    <Books />
                    </a>
                </Link>
                </li>
                <li>
                <Link href="/app">
                    <a>
                    <Search />
                    </a>
                </Link>
                </li>
                <li>
                <Link href="/app">
                    <a>
                    <Calendar />
                    </a>
                </Link>
                </li>
                <li>
                <Link href="/app">
                    <a>
                    <Settings />
                    </a>
                </Link>
                </li>
            </div>
            <div className="sec_options">
                <li>
                <Link href="/app">
                    <a>
                    <Feedback />
                    </a>
                </Link>
                </li>
              <li className="logout_icon" onClick={() => router.back()}>
                <Logout />
                </li>
            </div>
              <BurguerMenu onClick={() => {}} />
            </ul>
          </nav>
          <section>
            <div>
              <Logo />
            </div>
            <p>Crea un libro de cocina a selecciona uno :)</p>
              <div className="cookbooks">
                {cookbooks &&
                  cookbooks.map((cookbook) =>
                      <Cookbook
                        key={cookbook.id}
                        name={cookbook.name}
                        path="/app/book"
                      />
                  )}
                <div className="button_container">
                  <AppButton onClick={toggleModal} type="primary">
                    NUEVO LIBRO
                  </AppButton>
                </div>
              </div>
          </section>
          <section className="second_page">
            <FourCharacters />
          </section>
        <Modal toggleModal={toggleModal} isOpen={isOpen} />
        </div>
      <style jsx>{`
        li {
          list-style: none;
          display: flex;
          justify-content: center;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2.4em;
          width: 3.4em;
        }

        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          padding: 0;
          margin: 0;
          width: 3.5em;
        }
        .logout_icon {
          cursor: pointer;
        }

        .main_options {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 13em;
        }

        .sec_options {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 10em;
        }

        nav {
          display: flex;
          justify-content: center;
          background-color: var(--blue);
          height: 100vh;
        }

        ul > :global(svg) {
          display: none;
        }

        .current_page {
          background-color: #3875ab;
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
            background-color: red;
          }
          nav {
            display: flex;
            align-items: center;
          }
        }

          .button_container {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: sticky;
            padding-bottom: 1em;
            bottom: 0;
            backdrop-filter: blur(5px);
            background-color: #ffffff11;
            width: 100%;
          }

          .cookbooks {
            align-items: center;
            display: flex;
            flex-direction: column;
          }

          .second_page {
            align-items: center;
            background-color: var(--blue);
            display: flex;
            justify-content: center;
            margin: 0;
          }

          div {
            display: flex;
            justify-content: center;
          }

          p {
            padding: 1em;
            font-size: 0.9em;
            font-weight: 600;
            color: var(--gray);
            margin: 0;
          }

          section > :global(svg) {
            fill: red;
          }

          section {
            padding-top: 2em;
            overflow-y: auto;
            height: 100vh;
            position: relative;
          }
      `}</style>
    </>
  )
}
