import React, { useState } from 'react';
import styles from './games.module.scss';
import stylesTitle from '../EventsSection/events.module.scss'

import Spider from '../../assets/img/poster_spider.jpg';
import Avangers from '../../assets/img/poster_avangers.jpg';
import Guardians from '../../assets/img/poster_guardian.jpg';
import Alliance from '../../assets/img/poster_alliance.jpg';
import Wolverine from '../../assets/img/poster_wolverine.jpg';

const gamesList = [
    {
        poster: Spider,
        title: 'Marvel`s Spider-Man',
        text: 'This game tells the story of Peter Parker, who becomes Spider-Man. Players can explore the open world of New York City, fight crime, and complete various missions.',
    },
    {
        poster: Avangers,
        title: 'Marvel`s Avengers',
        text: 'In this game, you can play as different Marvel superheroes such as Iron Man, Captain America, Hulk, Thor, and Black Widow. The game offers both a single-player campaign and a multiplayer mode where you can play with friends.',
    },
    {
        poster: Guardians,
        title: 'Marvel`s Guardians of the Galaxy',
        text: 'This game allows players to control the team of Guardians of the Galaxy, including Star-Lord and his companions. The game offers a unique story, action-adventure gameplay, and decision-making that affects the course of the game.',
    },
    {
        poster: Alliance,
        title: 'Marvel`s Ultimate Alliance',
        text: 'This is a series of games where players can assemble their own team of Marvel superheroes and embark on a mission to save the world. The game offers a wide range of characters to choose from and gameplay with elements of combat and puzzle-solving.',
    },
    {
        poster: Wolverine,
        title: 'Marvel`s Wolverine',
        text: "This is an upcoming game that will focus on the popular character Wolverine from Marvel comics. Information about the game is still limited, but it is expected to be an action-adventure with unique gameplay showcasing Wolverine's superhuman strength and healing abilities.",
    },
];

function Games() {
    const [selectedPoster, setSelectedPoster] = useState(null);

    const openModal = (poster) => {
        setSelectedPoster(poster);
    };

    const closeModal = () => {
        setSelectedPoster(null);
    };

    return (
        <section className={styles['games']}>
            <div className={stylesTitle['events-title__path']}>
            </div>

            <div className='container'>
                <h2 className={stylesTitle['events-title']}>GAMES</h2>

                    <div className={styles['games-wrapper']}>
                        <div className={styles['games-bg']}>
                            {gamesList.map((item, index) => (
                                <div key={item.title + index} className={styles['games-card']}>
                                    <img className={styles['card-img']} onClick={() => openModal(item.poster)} src={item.poster} alt={item.title} />
                                    <h4 className={styles['card-title']}>{item.title}</h4>
                                    <p className={styles['card-text']}>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
            {selectedPoster && (
                <div className={`${styles['modal']} ${styles['modal-open']}`}>
          <span className={styles['close']} onClick={closeModal}>
            &times;
          </span>
                    <img className={styles['modal-image']} src={selectedPoster} alt="Selected Poster" />
                </div>
            )}
        </section>
    );
}

export default Games;
