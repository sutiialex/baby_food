import React from 'react';
import {ConsumeEvent} from "./model";

export default ({consumed}: { consumed: ConsumeEvent[] }) => {
    return (
        <>
            <h1>Consumed:</h1>
            <table>
                <thead>
                <tr>
                    <th>Food</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    consumed.reverse().map(c => (<tr key={c.food}>
                        <td>{c.food}</td>
                        <td>{c.date.toDateString()}</td>
                    </tr>))
                }
                </tbody>
            </table>
        </>
    );
}