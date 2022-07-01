import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/forms controls/FormsControls';
import {required} from '../../utils/validators/validators';


export type FormDataType = {
    login:string
    password:string
    rememberMe: boolean
}

const LoginForm = (props:InjectedFormProps<FormDataType> ) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field placeholder={'Password'}   name={'password'}
                           validate={[required]}
                           component={Input}/>
                </div>
                <div>
                    <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const ReduxLoginForm = reduxForm<FormDataType>({form:'login'})(LoginForm)
