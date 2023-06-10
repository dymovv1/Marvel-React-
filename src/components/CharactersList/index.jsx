import React, { useEffect, useState } from "react";
import { MD5 } from "crypto-js";
import styles from './charactersList.module.scss';

const CharactersList = () => {
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [charactersPerPage, setCharactersPerPage] = useState(20);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const publicKey = 'fd9492c3d31039d4d056ed08856e320d';
    const privateKey = '373416865b92a61ca17108f06774383d670c8935';
    const ts = Date.now();
    const hash = MD5(ts + privateKey + publicKey).toString();
    const [visiblePages, setVisiblePages] = useState(5);
    const [currentPageGroup, setCurrentPageGroup] = useState(1);

    const maxPageGroups = Math.ceil(totalPages / visiblePages);

    const firstVisiblePage = (currentPageGroup - 1) * visiblePages + 1;
    const lastVisiblePage = Math.min(currentPageGroup * visiblePages, totalPages);

    const handleNextGroup = () => {
        setCurrentPageGroup((prevGroup) => Math.min(prevGroup + 1, maxPageGroups));
    };

    const handlePreviousGroup = () => {
        setCurrentPageGroup((prevGroup) => Math.max(prevGroup - 1, 1));
    };

    useEffect(() => {
        const fetchList = async () => {
            try {
                const offset = (currentPage - 1) * charactersPerPage;
                const response = await fetch(`https://gateway.marvel.com/v1/public/characters?limit=${charactersPerPage}&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
                const data = await response.json();
                const characters = data.data.results;
                const totalCharacters = data.data.total;
                setList(characters);
                setTotalPages(Math.ceil(totalCharacters / charactersPerPage));
            } catch (error) {
                console.error(error);
            }
        };

        fetchList();
    }, [currentPage, charactersPerPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCharactersPerPageChange = (event) => {
        const charactersPerPage = parseInt(event.target.value, 10);
        setCharactersPerPage(charactersPerPage);
        setCurrentPage(1);
    };

    const handleDetailsClick = (character) => {
        setSelectedCharacter(character);
    };

    const handleModalClose = () => {
        setSelectedCharacter(null);
    };

    const [openSections, setOpenSections] = useState({});

    const handleAccordion = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <section className={styles['list']}>
            <div className='container'>
                <div className={styles['list-body']}>

            {list.map((character) => (
                <div className={styles['list-card']} onClick={() => handleDetailsClick(character)} key={character.id}>
                    {character.thumbnail && (
                        <img className={styles['list-img']}
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                        />

                    )} <div>
                    <h3>{character.name}</h3>
                </div>

                </div>

            ))}

                    {selectedCharacter && (
                        <div className={styles['modal']}>
                            <div className={styles['modal-card']}>
                                <h3 className={styles['card-name']}>{selectedCharacter.name}</h3>
                                {selectedCharacter.thumbnail && (
                                    <div>
                                        <img
                                            src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
                                            alt={selectedCharacter.name}
                                            className={styles['card-img']}
                                        />
                                    </div>
                                )}

                                <div className={styles['modal-text']}>

                                {selectedCharacter.comics && (
                                    <div>
                                        <h4 className={styles['card-title']} onClick={() => handleAccordion("comics")}>Comics</h4>
                                        {openSections["comics"] && (
                                            <ul className={styles['card-text']}>
                                                {selectedCharacter.comics.items.map((comic) => (
                                                    <li key={comic.name}>{comic.name}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}

                                {selectedCharacter.stories && (
                                    <div>
                                        <h4 className={styles['card-title']}  onClick={() => handleAccordion("stories")}>Stories</h4>
                                        {openSections["stories"] && (
                                            <ul className={styles['card-text']}>
                                                {selectedCharacter.stories.items.map((story) => (
                                                    <li key={story.name}>{story.name}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}

                                {selectedCharacter.events && (
                                    <div>
                                        <h4 className={styles['card-title']}  onClick={() => handleAccordion("events")}>Events</h4>
                                        {openSections["events"] && (
                                            <ul className={styles['card-text']}>
                                                {selectedCharacter.events.items.map((event) => (
                                                    <li key={event.name}>{event.name}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}

                                {selectedCharacter.series && (
                                    <div>
                                        <h4 className={styles['card-title']}  onClick={() => handleAccordion("series")}>Series</h4>
                                        {openSections["series"] && (
                                            <ul className={styles['card-text']}>
                                                {selectedCharacter.series.items.map((series) => (
                                                    <li key={series.name}>{series.name}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                                <button className={styles['modal-close']} onClick={handleModalClose}>Close</button>
                            </div>
                        </div>
                        </div>

                    )}

                </div>

                <div>

                    <div className={styles['pagination']}>
                        {currentPageGroup > 1 && (
                            <button className={styles['pagination-btn']} onClick={handlePreviousGroup}>
                                Previous
                            </button>
                        )}
                        {Array.from({ length: visiblePages }, (_, index) => {
                            const pageNumber = firstVisiblePage + index;
                            if (pageNumber <= lastVisiblePage) {
                                return (
                                    <button
                                        className={styles['pagination-btn']}
                                        key={pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            }
                            return null;
                        })}
                        {currentPageGroup < maxPageGroups && (
                            <button className={styles['pagination-btn']} onClick={handleNextGroup}>
                                Next
                            </button>
                        )}
                </div>
                </div>
                <div className={styles['pages-select']}>
                    <div>
                        <h4>Number of characters per page</h4>
                    </div>

                    <select value={charactersPerPage} onChange={handleCharactersPerPageChange}>
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="60">60</option>
                    </select>
                </div>
            </div>
                </section>
    );
};

export default CharactersList;
