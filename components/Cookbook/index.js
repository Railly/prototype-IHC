import Arrow from 'components/Icons/Arrow'
import Link from 'next/link'

export default function Cookbook ({ name, path }) {
  return (
    <>
        <Link href={`${path}`}>
          <a>
            <button>
              {name}
              <Arrow width={31} height={31} />
            </button>
          </a>
        </Link>
      <style jsx>{`
        button {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          align-items: center;
          border: 1px solid transparent;
          border-radius: 6px;
          background-color: var(--light-blue);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 0.8em 2em;
          margin-top: 1em;
          margin-bottom: 1em;
          width: 27vw;
        }

        button:hover,
        button:focus {
          transform: scale(1.03);
          transition: 0.3s;
        }

        button:focus {
          outline: 1px solid #fff;
        }

        button:active {
          transform: scale(0.99);
        }
      `}</style>
    </>
  )
}
