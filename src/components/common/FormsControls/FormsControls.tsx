import s from "../../Profile/Posts/Posts.module.css";
import {FC} from "react";

type TextareaPropsType = {
    input: any
    meta: any
}



export const Textarea: FC<TextareaPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.textarea}>
            <textarea
                {...input}
                {...props}
                className={s.content__textarea + ' ' + (hasError ? s.hasErrorStyles : '')}
            ></textarea>
            {hasError && <span className={s.errorMessage}>{meta.error}</span>}
        </div>
    )
}