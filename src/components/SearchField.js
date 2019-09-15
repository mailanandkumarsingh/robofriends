import React from 'react'

export default function SearchField({onSearchFieldChange}) {
    return (
        <div className="pa2">
            <input
                placeholder="Robot to Search"
                type="search"
                className="pa3 ba b--green bg-lightest-blue"
                onChange={onSearchFieldChange}
            />
        </div>
    )
}
