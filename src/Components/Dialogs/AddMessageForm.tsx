import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';

export type AddMessageFormTypes = {
    newMessageBody:string
}

const AddMessageForm = (props:InjectedFormProps<AddMessageFormTypes>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>
                    <div>
                        <button> addMessage</button>
                    </div>
                </div>
            </form>
        </div>
    );
};


export const ReduxAddMessageForm = reduxForm<AddMessageFormTypes>({form: 'dialogAddMessageForm'})(AddMessageForm)