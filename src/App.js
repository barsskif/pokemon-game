import {useState} from 'react';
import GamePage from './routes/Game';
import HomePage from './routes/Home';

const App = () =>{
  
  const [page, setPage] = useState('app')
  const hendleChengePage = (page) =>{
    setPage(page)
  }

  const hendleChengeExitGame = (page) =>{
    
    setPage(page)
  }

    switch (page) {
      case "app":
        return <HomePage onChangePage = {hendleChengePage}/> 
    case "game":
      return <GamePage onTest = {hendleChengeExitGame} />
      default:
        return <HomePage />
      
    }
 
}

export default App;