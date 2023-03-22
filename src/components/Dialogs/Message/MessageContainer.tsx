import React from "react";
import {Message} from "./Message";
import {addMessageActionCreator, InitialStateType, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import { Dispatch } from "redux";


export type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

export type MapDispatchToPropsType = {
    addMessage: () => void
    updateMessage: (newMessage: string) => void
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

const mapStateToProps = (state:MapStateToPropsType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateMessage: (newMessage: string) => dispatch(updateNewMessageTextActionCreator(newMessage)),
    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);