import React from 'react';
import clases from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={clases.dialogs}>
            <div className={clases.dialogs_items}>
                <div className={clases.dialog}>Dimych</div>
                <div className={clases.dialog}>Andrey</div>
                <div className={clases.dialog}>Sasha</div>
                <div className={clases.dialog}>Ilya</div>
                <div className={clases.dialog}>Alena</div>
                <div className={clases.message}>Hi</div>
                <div className={clases.message}>How is your IT-KAMASUTRA?</div>
                <div className={clases.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs
