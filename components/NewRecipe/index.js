import Back from 'components/Icons/Back'
import AppButton from 'components/Buttons/AppButton'
import Logo from 'components/Icons/Logo'
import ImageForm from 'components/Forms/ImageForm'
import StepsForm from 'components/Forms/StepsForm'
import IngredientsForm from 'components/Forms/IngredientsForm'
import PreviewRecipe from 'components/PreviewRecipe'
import {useState} from 'react'

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3
}


export default function NewRecipe () {
  const [title, setTitle] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [img, setImg] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])
  
  console.log(img);

  const onChangeTitle = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }
  return(
    <>
      <section>
        <div className="back_container">
          <Back width={35} height={35} onClick={() => router.back()} />
        </div>
        <div>
          <Logo />
        </div>
        <p>Crea tu receta :)</p>
        <form>
          <label>Título</label>
          <input type="text" onChange={onChangeTitle} defaultValue={title} />
          <ImageForm
            drag={drag}
            setDrag={setDrag}
            setTask={setTask}
            img={img}
            setImg={setImg}
          />
          <IngredientsForm
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <StepsForm steps={steps} setSteps={setSteps} />
        </form>
        <div className="buttons_container">
          <AppButton onClick={() => {}} type="save" disabled={disabled}>
            ACTUALIZAR
          </AppButton>
          <AppButton onClick={() => {}} type="cancel" disabled={disabled}>
            CANCELAR
          </AppButton>
        </div>
      </section>
      <section className="second_page">
        <PreviewRecipe
          title={title}
          ingredients={ingredients}
          steps={steps}
          img={img}
        />
      </section>
      <style jsx>{`
        * {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          font-weight: 600;
        }

        div > :global(svg) {
          cursor: pointer;
        }

        .back_container {
          display: flex;
          justify-content: flex-start;
          padding-left: 2em;
        }

        form > :global(svg) {
          margin-top: 1em;
          cursor: pointer;
        }

        h3 {
          color: var(--gray);
          user-select: none;
        }

        .buttons_container {
          display: flex;
          justify-content: space-evenly;
          position: sticky;
          padding-bottom: 1em;
          bottom: 0;
          backdrop-filter: blur(5px);
          background-color: #ffffffaa;
          width: 100%;
        }

        .buttons_container > :global(button) {
          width: 10em;
        }

        form {
          display: flex;
          padding-left: 2em;
          flex-direction: column;
          width: 80%;
        }

        label {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          color: var(--orange);
          margin-top: 1.5em;
        }

        input {
          background-color: transparent;
          border: 0;
          border-bottom: 2px solid var(--black);
          font-size: 0.9em;
          margin-top: 1em;
        }

        input:focus {
          outline: none;
          border-bottom: 2px solid var(--orange);
        }

        .second_page {
          border-left: 2px solid var(--light-gray);
          display: flex;
          align-items: center;
          flex-direction: column;
          margin: 0;
        }

        div {
          display: flex;
          justify-content: center;
        }

        p {
          padding-left: 2em;
          padding-top: 2em;
          font-size: 0.9em;
          font-weight: 600;
          color: var(--gray);
          margin: 0;
        }

        section {
          padding-top: 1em;
          overflow-y: auto;
          height: 100vh;
          position: relative;
        }
      `}</style>
    </>

  )
}
