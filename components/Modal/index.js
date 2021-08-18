import AppButton from 'components/Buttons/AppButton'

export default function Modal ({ toggleModal, isOpen }) {
  return (
    <>
      <div className="blur_background"></div>
      <div className="modal_container">
        <div className="modal">
          <label>Ponle un nombre :D </label>
          <input type="text" />
          <AppButton
            onClick={toggleModal}
            type="primary"
          >
            ACEPTAR
          </AppButton>
          <AppButton onClick={toggleModal} type="cancel">
            CANCELAR
          </AppButton>
        </div>
      </div>
      <style jsx>{`
        .modal {
          align-items: center;
          background-color: var(--white);
          border-radius: 10px;
          box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
          -webkit-box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
          -moz-box-shadow: 2px 1px 37px -14px rgba(0, 0, 0, 0.34);
          display: ${isOpen ? 'flex' : 'none'};
          flex-direction: column;
          height: 25em;
          justify-content: center;
          width: 40em;
        }
        .modal_container {
          align-items: center;
          display: ${isOpen ? 'flex' : 'none'};
          height: 100vh;
          justify-content: center;
          position: absolute;
          width: 100vw;
        }

        .blur_background {
          backdrop-filter: blur(5px);
          background-color: #ffffff55;
          display: ${isOpen ? '' : 'none'};
          height: 100vh;
          position: absolute;
          width: 100vw;
        }

        input {
          font-size: 1em;
          margin: 1.5em 0;
          border: 1px solid var(--gray);
        }

        input:focus {
          outline: none;
          box-shadow: 0 0 1px 1px var(--orange);
        }
      `}</style>
    </>
  )
}
