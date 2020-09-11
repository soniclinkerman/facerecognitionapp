import React from "react"

const Rank = ({name, entries}) => {
    return(
        <div className="rank">
            <p> {name}, your current entry count is</p>
            <h3>{entries}</h3>

        </div>
    )
}

export default Rank
