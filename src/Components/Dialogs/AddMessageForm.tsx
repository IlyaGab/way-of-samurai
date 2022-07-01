import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React from 'react';
import {Textarea} from '../common/forms controls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

export type AddMessageFormTypes = {
    newMessageBody:string
}

let maxLenght50 = maxLengthCreator(50)

const AddMessageForm = (props:InjectedFormProps<AddMessageFormTypes>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'newMessageBody'} component={Textarea} validate={[required, maxLenght50]} placeholder={'Enter your message'}/>
                    <div>
                        <button> addMessage</button>
                    </div>
                </div>
            </form>
        </div>
    );
};


export const ReduxAddMessageForm = reduxForm<AddMessageFormTypes>({form: 'dialogAddMessageForm'})(AddMessageForm)