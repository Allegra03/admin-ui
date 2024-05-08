import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Widget from "../../components/widget/Widget.jsx";
import MyDatatable from "../../components/MyDatatable/MyDatatable.jsx";
import "./mylist.scss";

const MyList = () => {
  return (
    <div className="mylist">
    <Sidebar />
    <div className="mylistContainer">
      <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
        </div>
        <div className="datatable">
            <MyDatatable/>
        </div>
      </div>
  </div>
  );
};

export default MyList