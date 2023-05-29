import React from 'react';
import { NavLink } from 'react-router-dom';



const Burger = () => {
    const [loggin, setLoggin] = React.useState(false);

    
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={!loggin ? '/signup' : '/movies'}>{!loggin ? 'Регистарация' : "Фильмы"}</NavLink>
                    <NavLink to={!loggin ? '/signin' : '/savemovies'}>{!loggin ? 'Войти' : "Сохранённые фильмы"}</NavLink>
                </li>
            </ul>
            {loggin ? <NavLink to='/profile'>Аккаунт</NavLink> : ""}
        </nav>
    )
}

export default Burger;