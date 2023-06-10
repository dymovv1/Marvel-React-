import { useState, useEffect } from 'react';
import styles from "./events.module.scss";
import { MD5 } from 'crypto-js';
import creators from '../../assets/img/list_creators.png';
import stories from '../../assets/img/list_stories.png';
import comics from '../../assets/img/list_comics.png';
import closeButton from '../../assets/img/closeButton.png';


const EventsSection = () => {
    const [events, setEvents] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const publicKey = 'fd9492c3d31039d4d056ed08856e320d';
    const privateKey = '373416865b92a61ca17108f06774383d670c8935';
    const ts = Date.now();
    const hash = MD5(ts + privateKey + publicKey).toString();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`https://gateway.marvel.com/v1/public/events?&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
                const data = await response.json();
                const limitedEvents = data.data.results.slice(0, showMore ? data.data.results.length : 8);
                setEvents(limitedEvents);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvents();
    }, [showMore]);

    const handleShowMore = () => {
        setShowMore(true);
    };

    const handleHide = () => {
        setShowMore(false);
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    if (events.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles['events']}>
            <div className={styles['events-title__path']}>
            </div>
            <div className='container'>
                <h1 className={styles['events-title']}>Latest Events</h1>

                <div className={styles['events-body']}>
                    {events.map((event) => (
                        <a href="#modal-event" key={event.id} onClick={() => handleEventClick(event)}>
                            <div className={styles['events-post']}>
                                <img
                                    className={styles['events-img']}
                                    src={event.thumbnail.path + '.' + event.thumbnail.extension}
                                    alt={event.title}
                                />
                                <h3 className={styles['events-name']}>Name: {event.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
                <div id="modal-event" className={styles['more']}>
                    {!showMore && events.length > 7 && (
                        <button  className={styles['more-button']} onClick={handleShowMore}>
                            More
                        </button>
                    )}
                    {showMore && (
                        <button  className={styles['more-button']} onClick={handleHide}>
                            Hide
                        </button>
                    )}
                </div>
            </div>
            {selectedEvent && (
                <div  className={styles['modal']}>

                    <div className='container'>

                        <div className={styles['modal-body']}>
                            <div>
                            <span className={styles['close']} onClick={handleCloseModal}>
                            <img className={styles['close-img']}  src={closeButton} alt={closeButton}/>
                            </span>
                            </div>

                    <div className={styles['modal-wrapper']}>

                        <div>
                            {selectedEvent.thumbnail && (
                                <img className={styles['modal-img']}
                                    src={`${selectedEvent.thumbnail.path}.${selectedEvent.thumbnail.extension}`}
                                    alt={selectedEvent.title}
                                />
                            )}
                            <div>
                                <h2>{selectedEvent.title}</h2>
                            </div>
                        </div>

                            <div className={styles['modal-description']}>
                                <h2>Description</h2>

                                <p className={styles['description-text']}>{selectedEvent.description}</p>
                            </div>
                        </div>



                        <div className={styles['modal-text']}>

                        <div className={styles['modal-card']}>

                            <h3 className={styles['card-title']}><img src={stories} alt={stories}/> Stories :</h3>

                            {selectedEvent.stories.items.map((story) => (
                                <li className={styles['card-list']}  key={story.resourceURI}>{story.name}</li>
                            ))}
                        </div>

                        <div className={styles['modal-card']}>
                            <h3 className={styles['card-title']}><img src={creators} alt={creators}/> Creators :</h3>

                            {selectedEvent.creators.items.map((creator) => (
                                <li className={styles['card-list']} key={creator.resourceURI}>{creator.name}

                                </li>
                            ))}
                        </div>

                        <div className={styles['modal-card']}>
                            <h3 className={styles['card-title']}><img src={comics} alt={comics}/> Comics :</h3>

                            {selectedEvent.comics.items.map((comic) => (
                                <li className={styles['card-list']}    key={comic.resourceURI}>{comic.name}</li>
                            ))}
                        </div>
                        </div>


                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default EventsSection;
