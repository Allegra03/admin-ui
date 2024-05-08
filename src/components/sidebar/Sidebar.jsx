import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
  return (
	<div className="sidebar">
	<div className="top">
		<Link to="/">
		<span className="logo">Store</span>
		</Link>
	</div>
	<hr />
	<div className="center">
		<ul>
		<p className="title">MAIN</p>
		<li>
			<DashboardRoundedIcon className="icon"/>
			<span>Dashboard</span>
		</li>
		<p className="title">LIST</p>
		<Link to="/users">
			<li>
				<PersonRoundedIcon className="icon"/>			
				<span>Users</span>
			</li>
		</Link>
		<Link to="/products">
			<li>
				<Inventory2RoundedIcon className="icon"/>
				<span>Products</span>
			</li>
		</Link>
		<li>
			<ShoppingCartRoundedIcon className="icon"/>
			<span>Orders</span>
		</li>
		<Link to="/mylist">
			<li>
				<Inventory2RoundedIcon className="icon"/>
				<span>Categories</span>
			</li>
		</Link>
			<p className="title">USER</p>
		<li>
			<AccountCircleRoundedIcon className="icon"/>
			<span>Profile</span>
		</li>
		<li>
			<LogoutRoundedIcon className="icon"/>
			<span>Logout</span>
		</li>
		</ul>
	</div>
	<div className="bottom">
		<div className="colorOption"></div>
		<div className="colorOption"></div>
	</div>
	</div>
  )
}

export default Sidebar