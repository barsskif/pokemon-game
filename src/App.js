import { useState } from 'react';
import GamePage from './routes/Game';
import HomePage from './routes/Home';

const App = () => {

  const [page, setPage] = useState('app')
  const hendleChengePage = (page) => {
    setPage(page)
  }

  const hendleChengeExitGame = (page) => {
    setPage(page)
  }

  switch (page) {
    case "app":
      return <HomePage onChangePage={hendleChengePage} />
    case "game":
      return <GamePage onGemePage={hendleChengeExitGame} />
    default:
      return <HomePage />

  }


<Layout
 title="Правило игры"
 urlBg = {bg1} 
 position="100%" >
   <div>
            У каждого игрока в руке по пять карт, и цель состоит в том,
            чтобы захватить карты противника, превратив их в красный или синий цвет игрока.
       
            Чтобы выиграть, большинство из десяти разыгранных карт
            (включая одну карту, которая не находится на доске) должны быть цвета карты игрока.
            Для этого игрок должен захватить карты, поместив карту рядом с картой оппонента, после чего будут сравниваться «ранги» сторон,
            на которых соприкасаются две карты. Если ранг карты оппонента выше, чем карта игрока, карта игрока будет захвачена и превращена в цвет оппонента.
            Если ранг игрока выше, карта противника будет захвачена и заменена на цвет игрока.
        </div>
 </Layout>

<Layout 
colorBg = '#e2e2e2' 
title='Cards' 
>
<div className="flex">
          {
            PokemonItems.map(({id, name, img, type, values}) =>
              <PokemonCard
                key={id}
                name={name}
                id={id}
                img={img}
                type={type}
                values={values} />)
          }
        </div>

</Layout>

<Layout
 title=' Layout header text'  
 urlBg = {bg2} />

<Footer />
</>
  );

}

export default App;