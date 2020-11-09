import React from 'react';


const ListItem = (props) => {

const metaData = props.comic_info;

// destructure
const {thumbnail, title, issueNumber, pageCount, dates, prices, creators} = metaData


    return (
        <div className="comic">
            <div className = "comic-thumbnail-container">
                <img className = "comic-thumbnail" src = {`${thumbnail.path}.${thumbnail.extension}`} alt = 'comic'/>
            </div>
            <div className = "comic-data-container">
                <h1> {title} </h1>
                <p> issue: {issueNumber} </p>
                <p> pages: {pageCount} </p>
                <p> Date: {new Date(dates[0].date).toLocaleDateString()} </p>
                <p> Price: ${prices[0].price} </p>
            
            </div>
            {/* <img src = {`${comic_info.data.results[0].thumbnail.path}.${comic_info.data.results[0].thumbnail.extension}`}/> */}
            {/* <img src = {`${metaData.images[0].path}.${longPath.images[0].extension}`} alt = 'comic'/>   */}
        </div>
    );


}





export default ListItem;