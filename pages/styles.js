import css from 'styled-jsx/css'
import { device } from 'styles/devices'

export const styles = css`
  div {
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
`
export default function NeedIt () {
  return <h1>Need it</h1>
}
