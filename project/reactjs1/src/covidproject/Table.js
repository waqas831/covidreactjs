import React from 'react'
import './Table.css';
function Table({countries}) {
    return (
        <div className="table">
            {countries.map(({country,cases})=>{
                return(
                    <table className="wel">
                        <tr>
                            <td>{country}</td>
                            <td><strong>{cases}</strong></td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}

export default Table
