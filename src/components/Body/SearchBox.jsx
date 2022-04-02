import React from "react";
import { useState } from "react";
import './SearchBox.css';

export const SearchBox = () => {
    const [searchAddress, setSearchAddress] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    let count = 1;

    const handleChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);    
    }


    const handleClick = (e) => {
        const url = `https://agile-atoll-76159.herokuapp.com/https://72ih8opnm2.execute-api.ap-south-1.amazonaws.com/live/`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            for(var i=0; i<data.length; i++){
                if(data[i].company_name === searchTerm){
                    setSearchAddress(data[i].location);
                    return;
                }
            }
            setSearchAddress('Please enter a valid company name & also check uppercase-lowercase');
        })
        .catch(err => console.log(err));
        }

        const handleKeyPress = (e) => {
            if(e.key === 'Enter'){
                handleClick();
            }
        }


    return (
        <div className='search-box'>
            <p id="mainTxt">Search the directory</p>
            <div className='search-box-input'>
                <input type='text' onKeyPress={handleKeyPress} onChange={handleChange} placeholder='Search for companies' id="box"/>
                <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" width="28" onClick={handleClick} id='icon'><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
            <br/>
            <br/>
            <div className='search-results'>
                {searchAddress.split(',').map((item) => {
                    if(item === '{""' || item === '""}' || item === '""'){
                        return null;
                    } else {
                return <p key={count++}> {item.trim()}</p>
                    }
                })}
            </div>
        </div>
    )
}