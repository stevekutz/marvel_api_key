import React from 'react';
import ListItem from './ListItem';

const List = (props) => {


    console.log(props.result[0])

    return (
        <React.Fragment>
            {props.result.map((comic, id) => {
                return (
                    <ListItem key =  {id} comic_info = {comic}  />
                
                )
            
            })}
        
        </React.Fragment>

        

    )
}

export default List;