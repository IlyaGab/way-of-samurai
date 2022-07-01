import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type AddNewPostFormTypes = {
    newPostText:string
}

const AddNewPostForm = (props:InjectedFormProps<AddNewPostFormTypes>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const ReduxAddPostForm = reduxForm<AddNewPostFormTypes>({form: 'dialogAddPostForm'})(AddNewPostForm)
