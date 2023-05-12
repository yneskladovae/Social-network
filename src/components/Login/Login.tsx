import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginPropsType = {
    login: any
    isAuth: boolean
}

const Login: FC<LoginPropsType> = ({login, isAuth}) => {
    const onSubmit = (values: FormDataType) => {
        login(values.email, values.password, values.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {login})(Login)

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    component={Input}
                    name={'email'}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    component={Input}
                    name={'password'}
                    type={'password'}
                    validate={[requiredField]}
                />
            </div>
            {error && (
                <div style={{color: '#e6baad'}}>
                    {error}
                </div>)
            }
            <label>
                <Field type="checkbox" component={Input} name={'rememberMe'}/>remember me
            </label>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)