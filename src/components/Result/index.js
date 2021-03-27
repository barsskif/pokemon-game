import {useState, useEffect} from 'react';
import s from './style.module.css';
import YouWin from '../../components/Result/assets/you-win.png';
import YouLose from '../../components/Result/assets/you-lose.png';
import Draw from '../../components/Result/assets/draw.png';
import {useHistory} from "react-router-dom";

const Result = ({ type }) => {
   const [url, setUrl] = useState(null);
const history = useHistory()

   useEffect(() => {
       switch (type) {
           case 'win':
               setUrl(YouWin);
               setTimeout(()=>{
                   history.replace('/game/finish')
               }, 1500)
               break;
           case 'lose':
               setUrl(YouLose);
               setTimeout(()=>{
                   history.replace('/game')
               }, 1500)
               break;
           case 'draw':
               setUrl(Draw);
               setTimeout(()=>{
                   history.replace('/game')
               }, 1500)
               break;
           default:
               setUrl(YouWin);
       }
   }, [type]);

    return (
        <div className={s.result}>
            <img src={url} alt="result" />
        </div>
    );
};

export default Result;
