import React from 'react';
import Search from "../img/search.png";

const Header = ({ setCity }) => {

    const submit = (e) => {
        const post = e.get('city');
        setCity(post);
    }

    return (
        <header>
            <h1 className='header-title'>WEATHER-APP</h1>
            <form action={submit} className='form-app'>
                <input name='city' type="text" placeholder='введите город...'/>
                <button type="submit">
                    <img src={Search} alt="" />
                </button>
            </form>
        </header>
    );
}

export default Header;
