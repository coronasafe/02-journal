import Table from "Common/Table/ReactTable";
import { SelectFilter } from "Common/Table/ColumnFilter";

import { capacityOptions, statusOptions, findLabel } from "./cylinderParams";

function CylinderList({ loading, data, error }) {
  const columns = [
    {
      Header: "Serial Number",
      accessor: "serial_number",
      className: "text-gray-900",
      sortable: true,
      filter: "fuzzyText",
      filterable: true,
    },
    {
      Header: "Supplier Name",
      accessor: "supplier_name",
      sortable: true,
      filter: "fuzzyText",
      filterable: true,
    },
    {
      Header: "Capacity",
      accessor: "capacity",
      options: capacityOptions,
      Filter: SelectFilter,
      filterable: true,
      Cell: ({ value }) => {
        return findLabel(capacityOptions, value);
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => {
        return findLabel(statusOptions, value);
      },
    },
    {
      Header: "Last Location",
      accessor: "station_name",
      Cell: () => {
        return "-";
      },
    },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not retrieve station list. Please try again.</p>;
  }

  return <Table columns={columns} data={data} />;
}

export default CylinderList;
