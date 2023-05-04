import React from 'react'
import DeckItem from './DeckItem'
import {useSelector} from 'react-redux'


function List() {
    const { list } = useSelector(state => state.deckList);

    return (
    <div className='collection'>
        {console.log('list: ', list)};
        {console.log('list[0]: ', list[0])};
        {list.map(el => <DeckItem pokemon={el}/>)}
    </div>
    )
}


export default List