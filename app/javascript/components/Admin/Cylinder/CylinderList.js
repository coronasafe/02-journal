import { useMemo } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Spinner, SpinnerSize } from "@blueprintjs/core";

import Table from "Common/Table/ReactTable";
import { SelectFilter } from "Common/Table/ColumnFilter";
import { DETAIL } from "Common/Modals";

import {
  capacityOptions,
  statusOptions,
  findLabel,
  typeOptions,
  entryOptions,
} from "./cylinderParams";
import OptionsDropdown from "./OptionsDropdown";

function CylinderList({ loading, data, error, refresh, supplierId }) {
  const columns = [
    {
      Header: "Serial Number",
      accessor: "serial_number",
      className: "text-gray-900",
      sortable: true,
      filter: "fuzzyText",
      filterable: true,
      Cell: function SerialNumber({ value, row: { original } }) {
        const { vendor_id: supplierId, id: cylinderId } = original;
        const params = new URLSearchParams();
        params.append(DETAIL, "cylinder");
        params.append("supplierId", supplierId);
        params.append("cylinderId", cylinderId);
        return (
          <Link
            to={{
              search: params.toString(),
            }}
          >
            {value}
          </Link>
        );
      },
    },
    {
      id: "supplier_id",
      Header: "id",
      accessor: "vendor_id",
      filterable: true,
    },
    {
      Header: "Supplier Name",
      accessor: "vendor.name",
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
      options: statusOptions,
      Filter: SelectFilter,
      filterable: true,
      Cell: ({ value }) => {
        return findLabel(statusOptions, value);
      },
    },
    {
      Header: "Last Location",
      accessor: "station.name",
      Cell: function LastLocation({ value, row }) {
        if (!value) {
          return "-";
        }
        const {
          original: { station, entry_exit, updated_at },
        } = row;
        return (
          <div>
            <Link to={`/admin/stations/${station.id}`}>
              <p className="text-gray-900 font-semibold">{value}</p>
            </Link>
            <div className="mt-1">
              <span>{findLabel(entryOptions, entry_exit)}</span>
              <span> - </span>
              <time dateTime={updated_at} title={updated_at}>
                {dayjs(updated_at).fromNow()}
              </time>
            </div>
          </div>
        );
      },
    },
    {
      Header: "Original Type",
      accessor: "category",
      options: typeOptions,
      Filter: SelectFilter,
      filterable: true,
      Cell: ({ value }) => {
        return findLabel(typeOptions, value);
      },
    },
    {
      id: "options",
      Header: "",
      width: 0,
      Cell: function Options({ row: { original } }) {
        return (
          <OptionsDropdown
            id={original.id}
            supplierId={original.vendor_id}
            refresh={refresh}
          />
        );
      },
    },
  ];

  const initialState = useMemo(
    () => ({
      hiddenColumns: ["supplier_id"],
      filters: supplierId
        ? [
            {
              id: "supplier_id",
              value: supplierId,
            },
          ]
        : [],
    }),
    []
  );

  if (loading) {
    return <Spinner size={SpinnerSize.SMALL} />;
  }
  if (error) {
    return <p>Could not retrieve station list. Please try again.</p>;
  }

  return (
    <Table
      initialState={initialState}
      columns={columns}
      data={data}
      emptyProps={{
        title: "No cylinders added",
        description: "Add cylinders from Suppliers page",
      }}
    />
  );
}

export default CylinderList;
