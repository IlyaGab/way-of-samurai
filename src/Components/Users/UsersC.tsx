import axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import {UsersPageType} from './UsersContainer';
import userPhoto from '../../assets/images/user.jpg'

class UsersC extends React.Component<UsersPageType>{
       constructor(props:UsersPageType){
           super(props);
           alert('NEW')
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsersAC(response.data.items)
            })
        }

    render(){
        return (
            <div>
                {
                    this.props.usersPage.users.map(u =>
                            <div key={u.id}>
                    <span>
                        <div>
                            <img alt="not defined" className={s.image} src={userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                                <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div><div>{'u.location.city'}</div>
                        </span>
                    </span>
                            </div>
                    )

                }
            </div>

        );

    }
}


export default UsersC;