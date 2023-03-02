import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

// import makeData from './makeData'

const MyOrderTableWrap = styled.article`
    .myorderTable{
        width: 100%;
        margin: 0 auto;
        border-collapse: collapse;
    }

    .myPageTableHead,
    .myPageTableBody {
        border-bottom: 2px solid #1A1B23;
    }

    .myPageTableHead{
        height: 40px;
        text-align: center;
        font-size: 1.4rem;  
    }
    .myPageTableBodyLine{
        height: 70px;
        font-size: 1.4rem;
        font-weight: 400;
        overflow: hidden;
    }

    .myPageTableCell {
        border-bottom: 1px solid #1A1B23;
        text-align: center;
        color:#1A1B23;
    }
`

function OrderTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <MyOrderTableWrap>
        <table className="myorderTable" {...getTableProps()}>
            <thead className="myPageTableHead">
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                    </tr>
                ))}
                        
            </thead>
            <tbody {...getTableBodyProps()} className="myPageTableBody">
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} className="myPageTableBodyLine">
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()} className="myPageTableCell">{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
                </MyOrderTableWrap>
    )
}
export default OrderTable;