import React, { useState } from 'react';

const SortableTable = ({ data }) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortOrder, setSortOrder] = useState(0); // 0 - исходное положение, 1 - по возрастанию, 2 - по убыванию

    const handleSort = (key) => {
        let newData = [...sortedData];

        if (sortOrder === 0 || sortOrder === 2) {
            newData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
            setSortOrder(1);
        } else {
            newData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
            setSortOrder(2);
        }

        setSortedData(newData);
    };

    const handleReset = () => {
        setSortedData(data);
        setSortOrder(0);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort('exchange')}>Exchange</th>
                    <th onClick={() => handleSort('price')}>Price</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.exchange}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
            <button onClick={handleReset}>Reset</button>
        </table>
    );
};

export default SortableTable;
