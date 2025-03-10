/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = ({
  data,
  columns,
  isLoading,
  rowCount,
  pagination,
  setPagination,
}: any) => {
  // Initialize table instance with useReactTable
  const table = useReactTable({
    data: data || [], // Provide empty array if data is not loaded yet
    columns,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    manualPagination: true,
    rowCount,
    state: {
      pagination,
    },
  });

  return (
    <section>
      {isLoading ? (
        <div className="text-center py-4">Loading data...</div>
      ) : table ? (
        <>
          {/* Add a scrollable wrapper for the table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="text-left pl-4 border-b border-border text-gray-800 font-normal text-sm whitespace-nowrap bg-gray-50 py-[18px]"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-2 whitespace-nowrap py-3">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center py-4">No data available</div>
      )}
    </section>
  );
};

export default Table;
