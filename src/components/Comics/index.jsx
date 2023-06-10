import styles from './comics.module.scss';
import stylesTitle from '../EventsSection/events.module.scss'
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';


function Comics() {
    const [ref, inView] = useInView();
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const [higherBlockLoaded, setHigherBlockLoaded] = useState(false);

    useEffect(() => {
        function handleLoad() {
            setHigherBlockLoaded(true);
        }

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        if (inView && higherBlockLoaded && !animationTriggered) {
            setAnimationTriggered(true);
        }
    }, [inView, higherBlockLoaded, animationTriggered]);

        return (
            <section ref={ref} className={styles['comics']}>

                    <div className={stylesTitle['events-title__path']}>
                    </div>

                    <div className='container'>
                        <h2 className={styles['comics-title']}>The Origins of Marvel Comics: A Brief History</h2>
                        <div className={`${styles['comics-body']} ${animationTriggered ? styles['animate-body'] : ''}`}>

                            <div>
                                <div className={styles['comics-text']}>
                                    <h3 className={styles['comics-text__title']}>Introduction :</h3>
                                    <p className={styles['comics-text__paragraph']}>Marvel Comics, a powerhouse in the
                                        world of entertainment, has captivated audiences for decades with its rich
                                        storytelling, memorable characters, and iconic superheroes.
                                        The origins of Marvel Comics trace back to the early 20th century, and the
                                        company has since become a cultural phenomenon, shaping the landscape of the
                                        comic book industry and leaving an indelible mark on popular culture.
                                        In this article, we will explore the fascinating history of how Marvel Comics
                                        came to be.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className={styles['comics-text']}>
                                    <h3 className={styles['comics-text__title']}>The Golden Age :</h3>
                                    <p className={styles['comics-text__paragraph']}>The roots of Marvel Comics can be
                                        traced back to the Golden Age of comic books in the 1930s and 1940s. At that
                                        time, the company was known as Timely Comics, founded by Martin Goodman in 1939.
                                        Timely Comics published a variety of genres, including superheroes, mystery,
                                        romance, and western stories.
                                        Some of the notable characters that emerged during this period were the original
                                        Human Torch, Namor the Sub-Mariner, and Captain America.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className={styles['comics-text']}>
                                    <h3 className={styles['comics-text__title']}>The Birth of the Marvel Universe :</h3>
                                    <p className={styles['comics-text__paragraph']}>In the 1960s, under the guidance of
                                        editor-in-chief Stan Lee, Timely Comics transformed into Marvel Comics, ushering
                                        in a new era of storytelling and character development. Lee collaborated with
                                        legendary artists such as Jack Kirby and Steve Ditko to create a roster of
                                        iconic characters that would define the Marvel Universe.
                                        The Fantastic Four, Spider-Man, the Hulk, Thor, Iron Man, the X-Men, and the
                                        Avengers were among the groundbreaking characters introduced during this era.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className={styles['comics-text']}>
                                    <h3 className={styles['comics-text__title']}>The Marvel Method :</h3>
                                    <p className={styles['comics-text__paragraph']}>One of the defining aspects of
                                        Marvel Comics' success was the "Marvel Method" of creating comic books. Instead
                                        of following the traditional script-first approach, Marvel utilized a more
                                        collaborative method. Stan Lee would provide a general story outline to the
                                        artist, who would then create the artwork and add details and dialogue.
                                        This method allowed for more flexibility and creativity, resulting in dynamic
                                        and engaging stories
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className={styles['comics-text']}>
                                    <h3 className={styles['comics-text__title']}>Social Relevance and Cultural Impact
                                        :</h3>
                                    <p className={styles['comics-text__paragraph']}>Marvel Comics stood out for its
                                        willingness to tackle social and political issues of the time, giving the
                                        stories a sense of relevance and depth. The X-Men, for example, became a
                                        metaphor for societal discrimination, addressing themes of racism and prejudice.
                                        The comics explored complex moral dilemmas and reflected the changing social
                                        landscape, resonating with readers of all ages.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className={styles['comics-text']}>
                                    <h3 className={styles['comics-text__title']}>Expansion into Other Media :</h3>
                                    <p className={styles['comics-text__paragraph']}>Marvel Comics' success in the comic
                                        book industry paved the way for expansion into various other media formats.
                                        Over the years, Marvel characters have graced the silver screen in numerous
                                        blockbuster films, gaining a massive global following.
                                        Additionally, Marvel expanded its reach to television, animation, video games,
                                        and merchandise, solidifying its status as a pop culture phenomenon.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className={styles['comics-text']}>
                                    <h3 className={styles['comics-text__title']}>Conclusion :</h3>
                                    <p className={styles['comics-text__paragraph']}>From its humble beginnings as Timely
                                        Comics to its transformation into Marvel Comics, the company's journey has been
                                        one of creativity, innovation, and cultural significance.
                                        Marvel Comics revolutionized the comic book industry by introducing complex
                                        characters, compelling narratives, and tackling important societal issues. Its
                                        enduring legacy continues to captivate audiences worldwide, making Marvel Comics
                                        an integral part of our popular culture and a symbol of imagination and heroism.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        )

    }


export default  Comics;