import React from 'react'
import './Table.css'

export const Table = ({countries}) => {
    return (
        <div className = "table">
            {countries.map((event) => (
                <tr>
                    <td>{event.state}</td>
                    <td>
                        <strong>{event.active}</strong>
                    </td>
                </tr>
            ))}
        </div>
    )
}
