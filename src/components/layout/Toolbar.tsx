import Button from '../Button'
import Countdown from '../Countdown'
import InputField from '../InputField'
import Loading from "../Loading"
import Error from '../Error'

const Toolbar: React.FC<{ 
    handleClick: () => void, 
    handleInput: React.FormEventHandler<HTMLInputElement>, 
    inputRef: React.MutableRefObject<HTMLInputElement | null> 
}> = 
    ({ handleClick, handleInput, inputRef }) => {
        return (
            <section className='toolbar'>
                <Error />
                <Loading />
                <Button handleClick={handleClick} />
                <InputField handleInput={handleInput} inputRef={inputRef} />
                <Countdown />
            </section>
        )
}

export default Toolbar
