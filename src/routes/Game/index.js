const GamePage = ({onTest}) =>{

    const hendleClickButtoinExit = () =>{
        onTest && onTest('app')  
    }


    return (
        <>
        <div>
        <p>GAmePage</p>
        <button onClick = {hendleClickButtoinExit}>
            Exit 
        </button>
        </div>
        </>
    )
}


export default GamePage;