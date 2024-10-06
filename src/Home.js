import React from 'react';
import {useState} from 'react';

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (inputValue.trim()) { // for non empty input
            setNotes([...notes, inputValue]); // add note to notes[]
            setInputValue(''); // clear the input field
        }
    }

    return ( 
        <div className="home">
            <p> Notes: </p>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li> // display each note in a list
                ))}
            </ul>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Write a new note" 
            />
            <button onClick={handleClick}> Add the note </button>
        </div>
     );
}
 
export default Home;