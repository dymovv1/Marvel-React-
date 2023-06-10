import styles from './footer.module.scss';
import linkedin from '../../assets/img/linkedin.svg'
import github from '../../assets/img/github.svg'


function Footer (){
    return (
        <section className={styles['footer']}>
            <div className='container'>
                <div className={styles['footer-body']}>
                    <div>
                        <h5 className={styles['footer-title']}>
                            The project was created and designed by Roman Dziuba.
                        </h5>
                    </div>

                    <div>
                        <p>
                            For contact :
                        </p>
                    </div>

                    <div className={styles['footer-social']}>
                            < a className={styles['footer-link']}  target={"_blank"} href="https://www.linkedin.com/in/dziuba1/">
                                <img src={linkedin} alt={linkedin}/>
                                Linkedin
                            </a>

                            < a className={styles['footer-link']} target={"_blank"} href="https://github.com/dymovv1">
                                <img src={github} alt={github}/>
                                GitHub
                            </a>
                        </div>

                    <div>
                        © All rights reserved.
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer;