import React from 'react';
// import style from './style.module.css'
import bg1 from '../../static/bg1.jpg';
import bg2 from '../../static/bg2.jpg'

import Header from '../../components/Header';
import Layout from '../../components/Layout';


function HomePage({onChangePage}) {

    const handleClickButton = (page) => {
        onChangePage && onChangePage(page)
    }
    return (
        <>

            <Header
                title='Pokemon Game'
                descr='Ну что начнем'
                onClickButton={handleClickButton}
            />

            <Layout
                title="Правило игры"
                urlBg={bg1}
                position="100%">
                <div>
                    У каждого игрока в руке по пять карт, и цель состоит в том,
                    чтобы захватить карты противника, превратив их в красный или синий цвет игрока.

                    Чтобы выиграть, большинство из десяти разыгранных карт
                    (включая одну карту, которая не находится на доске) должны быть цвета карты игрока.
                    Для этого игрок должен захватить карты, поместив карту рядом с картой оппонента, после чего будут
                    сравниваться «ранги» сторон,
                    на которых соприкасаются две карты. Если ранг карты оппонента выше, чем карта игрока, карта игрока
                    будет захвачена и превращена в цвет оппонента.
                    Если ранг игрока выше, карта противника будет захвачена и заменена на цвет игрока.
                </div>
            </Layout>

            {/*<Layout*/}
            {/*    colorBg='#e2e2e2'*/}
            {/*    title='Cards'*/}
            {/*>*/}


            {/*</Layout>*/}

            {/*<Layout*/}
            {/*    title=' Layout header text'*/}
            {/*    urlBg={bg2}/>*/}

        </>
    );
}

export default HomePage;
