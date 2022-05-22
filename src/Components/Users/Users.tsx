import React from 'react';
import s from './Users.module.css'
import {UsersPageType} from './UsersContainer';



const Users = (props: UsersPageType) => {
        if (props.usersPage.users.length === 0) {
            props.setUsersAC([
                {
                    id: 1,
                    followed: false,
                    photoURL: 'https://biographymask.com/wp-content/uploads/2020/10/Ilya-Fedorovich-1200x1200.jpg',
                    name: 'Ilya',
                    status: 'i am Boss',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    id: 2,
                    followed: true,
                    photoURL: 'https://biographymask.com/wp-content/uploads/2020/10/Ilya-Fedorovich-1200x1200.jpg',
                    name: 'Alena',
                    status: 'i am wife of boss',
                    location: {
                        city: 'Fanipol',
                        country: 'Belarus'
                    }
                },
                {
                    id: 3,
                    followed: false,
                    photoURL: 'https://biographymask.com/wp-content/uploads/2020/10/Ilya-Fedorovich-1200x1200.jpg',
                    name: 'Evgeniy',
                    status: 'i am friend of boss',
                    location: {
                        city: 'Tel-a-viv',
                        country: 'Israel'
                    }
                },
            ])
        }

        return (
            <div>
                {
                    props.usersPage.users.map(u =>
                            <div key={u.id}>
                    <span>
                        <div>
                            <img alt='not defined' className={s.image} src={u.photoURL}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                                <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div><div>{u.location.city}</div>
                        </span>
                    </span>
                            </div>
                    )

                }
            </div>

        );
    }
;

export default Users;