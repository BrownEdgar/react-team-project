import React from 'react'
import s from "./Component.module.css";
import avatar from './img/avatar.svg'

export default function Component(props) {
    return (
        <div className={s.flex}>
            {props.data.map(elem => {
                return (
                    <div className={s.item} key={elem.id}>
                        <div className={s.left}>
                            <img src={avatar} alt="Avatar" className={s.avatar} />
                            <p className={s.username}>{elem.username}</p>
                        </div>
                        <div className={s.right}>
                            <p className={s.name}>{elem.name}</p>
                            <p className={s.info}><span>Mail:</span> {elem.email}</p>
                            <p className={s.info}><span>Phone:</span> {elem.phone}</p>
                            <p className={s.info}><span>Address:</span> {elem.address.city}, {elem.address.street}, {elem.address.suite}</p>
                            <p className={s.info}><span>Website:</span> {elem.website}</p>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
