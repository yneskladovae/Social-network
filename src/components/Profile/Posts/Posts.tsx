import React, {FC} from "react";
import s from "./Posts.module.css"
import {Post} from "./Post/Post";
import {InitialStateType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type PostPropsType = {
    profilePage: InitialStateType
    addPost: (newPostText: string) => void
}

type FormDataType = {
    newPostText: string
}

export const Posts: FC<PostPropsType> = ({profilePage, addPost}) => {
    const postsElements = profilePage.postData
        .map((post) => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} date={post.date}/>)

    const addPostHandler = (values: any) => {
        addPost(values.newPostText);
    }

    return (
        <div className={s.content}>
            <div className={s.content__items}>
                <h4 className={s.content__title}>My posts</h4>
                <AddNewPostFormRedux onSubmit={addPostHandler}/>
            </div>
            <h4 className={s.content__items__title}>Posting bord</h4>
            <div className={s.posts__items}>
                {postsElements}
            </div>
        </div>
    );
};

const maxLength100 = maxLengthCreator(100)

export const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
             <Field
                 name={'newPostText'}
                 component={Textarea}
                 placeholder="Whats in your mind today?"
                 className={'s.content__textarea'}
                 validate={[requiredField, maxLength100]}
             />
            <button className={s.content__textarea__btn}>Public</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)