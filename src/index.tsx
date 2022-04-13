import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type PostDataType = {
    postData:Array<PostDataPropsType>
    dialogs:Array<DialogsPropsType>
    messages:Array<MessagesPropstype>
}

export type PostDataPropsType = {
    id: number
    message:string
    likesCount: number
}

export type DialogsPropsType ={
    id:number
    name:string
}

export type MessagesPropstype = {
    id:number
    message:string
}

let postData = [
    {id:1, message:'Hi, how are you?', likesCount:12},
    {id:2, message:'Its my first post', likesCount:11},
    {id:3, message:'blabla', likesCount:11},
    {id:4, message:'fafa', likesCount:11}

]

let dialogs = [
    {id:1, name:'Dimych'},
    {id:2, name:'Andrey'},
    {id:3, name:'Sasha'},
    {id:4, name:'Ilya'},
    {id:5, name:'Alena'}
]

let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'How is your IT-KAMASUTRA?'},
    {id:3, message:'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
