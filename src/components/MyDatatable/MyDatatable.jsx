import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Products", width: 130 },
];

const rows = [
  { id: 1, firstName: "Nusa Roadster"},
  { id: 2, firstName: "Nusa N14 Custom"},
  { id: 3, firstName: "Nusa Thor6x6"},
  { id: 4, firstName: "Nusa Super 4"},
  { id: 5, firstName: "Nusa R Wagon"},
  { id: 6, firstName: "Nusa Navara"},
  { id: 7, firstName: "Nusa Stagea"},
  { id: 8, firstName: "Nusa NSX"},
  { id: 9, firstName: "Nusa X"},
  { id: 10, firstName: "Nusa IX"},


];

const MyDatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;
