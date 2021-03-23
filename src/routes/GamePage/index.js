import {useState} from "react";
import {useRouteMatch, Route, Switch} from "react-router-dom";
import StartPage from "../Game/routes/StartPage";
import BoardPage from "../Game/routes/BoardPage";
import FinishPage from "../Game/routes/FinishPage";
import {PokemonContext} from "../../context/PokemonContext";

const GamePage = () => {
    const [pokemons, setPokemons] = useState([])

    const match = useRouteMatch();

    return (
        <>
            <PokemonContext.Provider value={{pokemons, setPokemons}}>
                <Switch>
                    <Route path={`${match.path}/`} exact component={StartPage}/>
                    <Route path={`${match.path}/board`} component={BoardPage}/>
                    <Route path={`${match.path}/finish`} component={FinishPage}/>
                </Switch>
            </PokemonContext.Provider>
        </>
    )
};

export default GamePage;
