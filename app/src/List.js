import React from 'react';
import Listitem from './ListItem';

const List = (props) => {

    return (
        <Listitem comic_info = {props.result[0]}/>

    )
}

export default List;