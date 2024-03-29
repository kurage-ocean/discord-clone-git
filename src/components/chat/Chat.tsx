import React from 'react'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './Chat.scss'

const Chat = () => {
  return (
    <div className='chat'>
        {/* chatHeader */}
        <ChatHeader />
        {/* chatMessage */}
        <div className="chatMessage">
            <ChatMessage />
        </div>
        {/* chatInput */}
        <div className="chatInput">
            <AddCircleOutlineIcon />
            <form>
                <input type="text" placeholder='#Udemyへメッセージを送信' />
                <button type='submit' className='chatInputButton'>
                    送信
                </button>
            </form>

            <div className="chatInputIcons">
                <CardGiftcardIcon />
                <GifIcon />
                <EmojiEmotionsIcon />
            </div>
        </div>
    </div>
  )
}

export default Chat