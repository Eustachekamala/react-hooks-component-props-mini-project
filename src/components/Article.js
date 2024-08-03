import React from "react";

function Article({title, date, preview, minutes}) {

const getReadTimeIndicator = (minutes) => {
    let indicatorTime = '';
    if (minutes < 30) {
        // For less than 30 minutes, use coffee cup emojis
        const coffeeCups = Math.ceil(minutes / 5);
        indicatorTime = '☕️'.repeat(coffeeCups);
    } else {
        // For 30 minutes or more, use bento box emojis
        const bentoBoxes = Math.ceil(minutes / 10);
        indicatorTime = '🍱'.repeat(bentoBoxes);
    }
    return indicatorTime;
};

    return (
        <div>
            <h3 style={{color: "pink"}}>{title}</h3>
            {date ? <p>{date} : {minutes} min read</p> : "January 1, 1970"}
            <p>{getReadTimeIndicator(minutes)}</p>
            <p>{preview}</p>
        </div>
    )
}

export default Article;