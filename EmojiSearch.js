import React, { useState } from 'react'

const emojiData = [
    {
        id : 1,
        symbol : '😁',
        name : 'smiling'
    },
    {
        id : 1,
        symbol : '❤️',
        name : 'heart'
    },
    {
        id : 1,
        symbol : '😡',
        name : 'angry'
    },
    {
        id : 1,
        symbol : '😭',
        name : 'sad'
    },
    {
        id : 1,
        symbol : '😂',
        name : 'laugh'
    },
    {
        id : 1,
        symbol : '🫂',
        name : 'hugging'
    },
    {
        id : 1,
        symbol : '🥳',
        name : 'celebrating'
    },
    {
        id : 1,
        symbol : '🥱',
        name : 'tired'
    },
    {
        id : 1,
        symbol : '💜',
        name : 'voilet heart'
    },
    {
        id : 1,
        symbol : '😘',
        name : 'kissing'
    },
    {
        id : 1,
        symbol : '🤔',
        name : 'thinking'
    },
    {
        id : 1,
        symbol : '👌',
        name : 'super awesome'
    },
    {
        id : 1,
        symbol : '😋',
        name : 'tasty'
    },
    {
        id : 1,
        symbol : '😱',
        name : 'shocked'
    },
    {
        id : 1,
        symbol : '😺',
        name : 'cat'
    }

]

function EmojiSearch() {
    const [searchEmoji,setSearchEmoji] = useState("");

    const handleChange = (e) => {
        setSearchEmoji(e.target.value);
    }

    const showEmoji = emojiData.filter((emoji) => {
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    })
    return (
        <div className='main'>
            <h1>React Emoji App</h1>
            <input type="text" placeholder='Search For an Emoji' onChange={handleChange}/>
            <div className='op'>
                {
                    showEmoji.map((emoji) => <span>{emoji.symbol}</span>)
                }
            </div>
        </div>
    )
}

export default EmojiSearch