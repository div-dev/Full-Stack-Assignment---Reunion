import React from 'react';
import {useState, useMemo} from 'react';

import { MaterialReactTable } from 'material-react-table';
import { format } from 'date-fns';
import sampleData from '../data/sample-data.json';
import ColumnVisibilityPanel from './Column';
import FilterPanel from './FilterPanel';
import GroupPanel from './GroupPanel';

const TableComponent = () => {
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');
  const [groupBy, setGroupBy] = useState([]);

  const columns = useMemo(
    () => [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'category', header: 'Category' },
      { accessorKey: 'subcategory', header: 'Subcategory' },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
        Cell: ({ cell }) => format(new Date(cell.getValue()), 'dd-MMM-yyyy HH:mm')
      },
      {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        Cell: ({ cell }) => format(new Date(cell.getValue()), 'dd-MMM-yyyy HH:mm')
      },
      { accessorKey: 'price', header: 'Price' },
      { accessorKey: 'sale_price', header: 'Sale Price' }
    ],
    []
  );

  return (
    <div>
      <div className="table-toolbar">
        <FilterPanel setGlobalFilter={setGlobalFilter} />
        <ColumnVisibilityPanel setColumnVisibility={setColumnVisibility} />
        <GroupPanel setGroupBy={setGroupBy} />
      </div>
      <MaterialReactTable
        columns={columns}
        data={sampleData}
        state={{ columnVisibility, globalFilter, groupBy }}
        onColumnVisibilityChange={setColumnVisibility}
        onGlobalFilterChange={setGlobalFilter}
        onGroupByChange={setGroupBy}
        enableSorting
        enablePagination
        initialState={{ pagination: { pageSize: 10 } }}
      />
    </div>
  );
};

export default TableComponent;
