import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {UsersType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import { usersAPI} from '../../API/api';

export type UsersFunctionalComponentType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}


const UsersFunctionalComponent = (props: UsersFunctionalComponentType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.main}>
        <div>
            {pages.map(p => {
                return <span
                    //@ts-ignore
                    className={props.currentPage === p ? s.selectedPage : null} onClick={
                    (e) => {
                        props.onPageChanged(p)
                    }}>
                    {p + ' '}
                </span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img alt="not defined" className={s.image} src={
                                //@ts-ignore
                                u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    usersAPI.unfollowDAL(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.followDAL(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}


export default UsersFunctionalComponent;