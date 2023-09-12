import { useState } from "react";
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'alanfrancoa',
        name: 'Alan Franco Alvarez',
        isFollowing: false
    },
    {
        userName: 'ladygaga',
        name: 'Lady Garlic',
        isFollowing: false
    }
    ,
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: true
    }
]

export function App (){

    return (
        <div className="App">{
            users.map(user => {
                const {userName, name, isFollowing} = user
                return(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                    
                )
            })
        }        
        </div>
    )
}