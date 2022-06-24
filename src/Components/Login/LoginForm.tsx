import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


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
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'}   name={'password'} component={'input'}/>
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
