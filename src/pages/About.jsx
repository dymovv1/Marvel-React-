import { Outlet } from "react-router-dom";
import styles from './about.module.scss';



function About() {
    return(
        <section className={styles['about']}>
            <div className='container'>
                <div className={styles['about-body']}>
                    <div className={styles['about-video']}>
                        <iframe className={styles['about-video__iframe']}
                             src="https://www.youtube.com/embed/EOYoNfUK8ds"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className={styles['about-info']}>

                        <div className={styles['info-title']}>
                            <h2>Martin Goodman</h2>
                        </div>

                        <div>
                            <p className={styles['info-text']}>
                                The title "Founder of Marvel Comics" belongs to Martin Goodman, but the success of the company can be attributed to numerous creative individuals who expanded the Marvel universe to unprecedented heights. Thanks to their contributions, Marvel grew into a powerful media empire that forever changed the landscape of comics and superhero films.

                                One of the key figures in the world of Marvel is Martin Goodman. In 1939, he founded Timely Publications, which later evolved into the renowned Marvel Comics. Under his leadership, Marvel became popular among comic book readers. However, the history of Marvel would be incomplete without several notable creative personalities.

                                Stan Lee stands out as one of the most prominent writers and editors at Marvel. Together with artists Jack Kirby and Steve Ditko, he created a plethora of unforgettable characters that became iconic superheroes. Spider-Man, X-Men, Avengers, Fantastic Four – these are just a few examples of their creative collaboration. Their stories and characters became synonymous with Marvel and achieved global acclaim.

                                Additionally, Kevin Feige played a pivotal role in Marvel's development in the realm of cinema. Under his guidance, Marvel crafted the Marvel Cinematic Universe (MCU), a series of films that brought together different characters and storylines into a cohesive narrative. This was something new and groundbreaking, revolutionizing the concept of cinematic universes. Thanks to the MCU films, Marvel became a force to be reckoned with in the film industry and won the hearts of millions of viewers worldwide.

                                Marvel Comics cannot be imagined without the work of these exceptional creators. They have forever altered the landscape of comics and superhero films, creating a world where imagination and reality intertwine. Through their ideas and talent, Marvel has become a symbol of creativity, energy, and resilience. These creators not only founded Marvel, but they also forged a true legend that will live on in the hearts of fans for eternity.
                            </p>
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
         
        </section>

    )

}

export default About;