// import React from "react";
// import { useTable } from "react-table";
// import styled from 'styled-components';




// const MyTable = styled.table`
//     width: 100%;
//     margin: 0 auto;
//     border-collapse: collapse;

//     .myPageTableHead,
//     .myPageTableBody {
//         border-bottom: 2px solid #1A1B23;
//     }

//     .myPageTableHead{
//         height: 40px;
//         text-align: center;
//     }
//     .myPageTableBodyLine{
//         height: 70px;
//     }

//     .myPageTableCell {
//         border-bottom: 1px solid #1A1B23;
//         text-align: center;
//     }

//     .cursor{
//         cursor: pointer;
//     }
// `;

// function MyPageTable({ columns, data })  {

//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//         useTable({ columns, data });
//     <MyTable {...getTableProps()}>
//         <thead>
//             {headerGroups.map((headerGroup) => (
//                 <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) => (
//                         <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//                     ))}
//                 </tr>
//             ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//                 prepareRow(row);
//                 return (
//                     <tr {...row.getRowProps()}>
//                         {row.cells.map((cell) => (
//                             <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                         ))}
//                     </tr>
//                 );
//             })}
//         </tbody>
//     </MyTable>
// }

// export default MyPageTable;
import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

// import makeData from './makeData'

const MyTable = styled.div`
// padding: 1rem;

// table {
// border-spacing: 0;
// border: 1px solid black;

// tr {
// :last-child {
// td {
//   border-bottom: 0;
// }
// }
// }

// th,
// td {
// margin: 0;
// padding: 0.5rem;
// border-bottom: 1px solid black;
// border-right: 1px solid black;

// :last-child {
// border-right: 0;
// }
// }
// }
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;

    .myPageTableHead,
    .myPageTableBody {
        border-bottom: 2px solid #1A1B23;
    }

    .myPageTableHead{
        height: 40px;
        text-align: center;
    }
    .myPageTableBodyLine{
        height: 70px;
    }

    .myPageTableCell {
        border-bottom: 1px solid #1A1B23;
        text-align: center;
    }
`

function Table({ columns, data }) {
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
        <MyTable {...getTableProps()}>
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
        </MyTable>
    )
}
export default Table;