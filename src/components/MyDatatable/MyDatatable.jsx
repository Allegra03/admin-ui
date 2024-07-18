import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const MyDatatable = () => {
  const location = useLocation();
  const type = location.pathname.split('/')[1];
  
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, type),
      (snapShot) => {
        let mylist = [];
        snapShot.docs.forEach((doc) => {
          mylist.push({ id: doc.id, ...doc.data() });
        });
        setData(mylist);

        // Set the columns to only include 'id', 'name', and 'action'
        setColumns([
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'category', headerName: 'Name', width: 130 },
          {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
              return (
                <div className="cellAction">
                  <Link to={"/" + type + "/" + params.row.id} style={{ textDecoration: "none" }}>
                    <span className="viewButton">View</span>
                  </Link>
                  <span>
                    <span
                      className="deleteButton"
                      onClick={() => handleDelete(params.row.id)}
                    >
                      Delete
                    </span>
                  </span>
                </div>
              );
            },
          },
        ]);
      },
      (error) => {
        console.log(error);
      }
    );
  
    return () => {
      unsub();
    };
  }, [type]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, type, id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        {type.toUpperCase()}
        <Link to={"/" + type +"/new"} className="link"> 
          Add New
        </Link>
      </div>
      <DataGrid className="datagrid"
        rows={data}
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