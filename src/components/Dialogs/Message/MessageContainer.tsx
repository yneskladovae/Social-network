import React from "react";
import {Message} from "./Message";
import {
    addMessageActionCreator,
    InitialStateType,
} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../../redux/redux-store";


export type MapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    addMessage: (newMessageBody: string) => void
}

// export const MessageContainer: React.FC<MessageContainerPropsType> = () => {
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 const state = store.getState().dialogsPage
//                 const dialogsElements = state.dialogsData
//                     .map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>)
//
//                 const addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }
//
//                 const updateMessage = (newMessage: string) => {
//                     store.dispatch(updateNewMessageTextActionCreator(newMessage));
//                 }
//
//                 return <>
//                     <div className={s.dialogs__items}>
//                         {dialogsElements}
//                     </div>
//                     <div className={s.messages}>
//                         <Message
//                             messagesData={state.messagesData}
//                             newMessageText={state.newMessageText}
//                             addMessage={addMessage}
//                             updateMessage={updateMessage}
//                         />
//                     </div>
//                 </>
//
//             }
//         }
//     </StoreContext.Consumer>
// }

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessageBody: string) => dispatch(addMessageActionCreator(newMessageBody)),
    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);