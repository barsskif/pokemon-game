import React from 'react'
import styles from './Layout.module.css'


const Layout = ({ title, urlBg, colorBg, position, children }) => {

    const myBacgroundImg = {
        backgroundImage: `url(${urlBg})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: position ? position : null
    }

    const mybackgroundColor = {
        backgroundColor: colorBg
    }

    return (
        <>
            <section className={styles.root} >
                <div className={styles.wrapper} style={urlBg ? myBacgroundImg : mybackgroundColor}>
                    <article>
                        <div className={styles.title}>
                            <h3>{title}</h3>
                            <span className={styles.separator}></span>
                        </div>
                        <div className={[styles.desc, styles.full].join(' ')}>
                            <div>{children}</div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}


export default Layout;


