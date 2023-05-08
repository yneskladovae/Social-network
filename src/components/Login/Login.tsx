import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (values: FormDataType) => {
        console.log(values)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    component={Input}
                    name={'login'}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    type="text"
                    placeholder={'Password'}
                    component={Input}
                    name={'password'}
                    validate={[requiredField]}
                />
            </div>
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