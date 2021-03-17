import style from './style.module.css'


const GamePage = ({ onGemePage }) => {

    const hendleClickButtoinExit = () => {
        onGemePage && onGemePage('app')
    }


    return (
        <>
            <div>
                <p  >GamePage</p>
                <button className={style.test} onClick={hendleClickButtoinExit}>
                    Exit
        </button>
            </div>
        </>
    )
}


export default GamePage;