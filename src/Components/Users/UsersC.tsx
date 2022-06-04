import axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import {UsersPageType} from './UsersContainer';
import userPhoto from '../../assets/images/user.jpg'

class UsersC extends React.Component<UsersPageType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&totalCount=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const onPageChanged = (pageNumber: number) => {
                this.props.setPage(pageNumber)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&totalCount=${this.props.pageSize}`)
                    .then(response => {
                        this.props.setUsers(response.data.items)

                    });
            }
        ;

        return (
            <div className={s.main}>
                <div>
                    {pages.map(p => {
                        return <span
                            //@ts-ignore
                            className={this.props.currentPage === p && s.selectedPage} onClick={(e) => {
                            onPageChanged(p)
                        }}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u =>
                            <div key={u.id}>
                    <span>
                        <div>
                            <img alt="not defined" className={s.image} src={
                                //@ts-ignore
                                u.photos.small != null ? u.photos.small : userPhoto}/>
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