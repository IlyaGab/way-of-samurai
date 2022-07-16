import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props:ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactiveteEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'} </span>
                </div>
            }

            {editMode &&
                <div>
                    <input onBlur={deactiveteEditMode} value={status} onChange={onStatusChange} autoFocus={true} />
                </div>
            }
        </div>
    );
};


export default ProfileStatusWithHooks;