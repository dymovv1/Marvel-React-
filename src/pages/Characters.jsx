import { useState, useEffect } from 'react';
import styles from './characters.module.scss';
import CharactersList from "../components/CharactersList/index.jsx";

const SearchCharacters = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [characters, setCharacters] = useState([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const accessToken = '194460753508335';

    useEffect(() => {
        if (searchQuery) {
            const fetchCharacters = async () => {
                try {
                    const response = await fetch(`https://superheroapi.com/api.php/${accessToken}/search/${searchQuery}`);
                    const data = await response.json();

                    if (data.response === 'success') {
                        setCharacters(data.results.slice(0, 6));
                    } else {
                        setCharacters([]);
                    }
                } catch (error) {
                    console.error(error);
                }
            };

            fetchCharacters();
        } else {
            setCharacters([]);
        }
    }, [searchQuery]);

    const handleClear = () => {
        setSearchQuery('');
        setCharacters([]);
    };

    const handleCharacterClick = (characterName) => {
        setSearchQuery(characterName);
    };

    const closeModal = () => {
        setSelectedCharacterId(null);
    };

    return (
        <section className={styles['characters']}>

            <div className="container">

                <div className={styles['characters-body']}>

                    <div className={styles['characters-search']}>
                        <input className={styles['search-input']}
                               type="text"
                               value={searchQuery}
                               onChange={(e) => setSearchQuery(e.target.value)}
                               placeholder="Search Characters"
                        />
                        <button className={styles['search-btn']} onClick={handleClear}>Clean</button>
                    </div>

                    <div >

                        <div className={styles['characters-wrapper']}>
                            {characters.map((character) => (
                                <div className={styles['characters-card']} key={character.id}>
                                    <img className={styles['card-img']} src={character.image.url} alt={character.name} />
                                    <h3 className={styles['card-name']} onClick={() => handleCharacterClick(character.name)}>{character.name}</h3>
                                    <button className={styles['card-btn']} onClick={() => setSelectedCharacterId(character.id)}>Details</button>

                                    {selectedCharacterId === character.id && (
                                        <div className={styles['details']}>
                                            <p> <span className={styles['details-title']}>ID</span> : {character.id}</p>
                                            <p><span className={styles['details-title']}>Full Name </span> : {character.biography['full-name']}</p>
                                            <p><span className={styles['details-title']}>Alter Egos</span> : {character.biography['alter-egos']}</p>
                                            <p><span className={styles['details-title']}>Aliases</span>: {character.biography['aliases']}</p>
                                            <p><span className={styles['details-title']}>Place of Birth</span> : {character.biography['place-of-birth']}</p>
                                            <p><span className={styles['details-title']}>First Appearance</span> : {character.biography['first-appearance']}</p>
                                            <p><span className={styles['details-title']}>Publisher</span> : {character.biography['publisher']}</p>
                                            <p><span className={styles['details-title']}>Alignment</span> : {character.biography['alignment']}</p>
                                            <button className={styles['details-btn']} onClick={closeModal}>Close</button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles['example']}>
                    <div className={styles['example-title']}>
                        For Example :
                    </div>

                    <div className={styles['example-list']}>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Spider-Man')}>Spider-Man</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Iron Man')}>Iron Man</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Captain America')}>Captain America</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Hulk')}>Hulk</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Thor')}>Thor</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Black Widow')}>Black Widow</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Wolverine')}>Wolverine</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Deadpool')}>Deadpool</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Doctor Strange')}>Doctor Strange</h4>
                        <h4 className={styles['list-btn']} onClick={() => handleCharacterClick('Black Panther')}>Black Panther</h4>
                    </div>
                </div>

                <CharactersList/>
            </div>

        </section>
    );
};

export default SearchCharacters;
