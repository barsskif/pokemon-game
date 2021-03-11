import React from 'react'
import styles from './Layout.module.css'


const Layout  = ({title, descr, urlBg, colorBg, position}) => {
    

    const myBacgroundImg = {
        backgroundImage: `url(${urlBg})`,
        backgroundSize:"cover",
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: position ? position : null   }

    const mybackgroundColor = {
        backgroundColor: colorBg
    }
   
    
  
  return (
    <>
    <section className={styles.root} >
    <div className={styles.wrapper} style={urlBg ? myBacgroundImg : colorBg ? mybackgroundColor : {}}>
        <article>
            <div className={styles.title}>
                <h3>{title}</h3>
                <span className={styles.separator}></span>
            </div>
            <div className={[styles.desc, styles.full].join(' ')}>
                <p>{descr}</p>
            </div>
        </article>
    </div>
</section>
    </>
  );
}


export default Layout;


