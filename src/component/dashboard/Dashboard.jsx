// import "./Dashboard.css";
import LineChart from "./LineCharts";
import PieChart from "./PieChart";
import bell from '../../img/bell.png'
import { Details } from "../login/DetailsProvider";

const Dashboard = () => {
	const { userData } = Details();
	return (
		<div>
			<div className="header">
				<h2 id="Dash">Dashboard</h2>
				<div id="userInfo">
					<input type="search" id="searchBox" placeholder="Search..."/>
						<img src={bell} id="bell" alt="" />
						<img src={userData.userImg} id="userImg" alt="user img" />
				</div>
			</div>
			<nav id="side-nav">
				<div className="nav-list">
					<h3 className="text-light">Board.</h3>
					<ul className="nav nav-pills nav-stacked col-sm-12 nav_left_tab col-md-12 mt-4">
						<li className="active"><a href="#tab_a" className="nav-link active" ><i className="fas fa-tachometer-alt"></i>
							<span>Dashboard</span></a>
						</li>
						<li className=""><a href="#tab_b" className="nav-link" ><i className="fas fa-history"></i>
							<span>Transactions</span></a>
						</li>
						<li className=""><a href="#tab_c" className="nav-link" ><i className="fas fa-bullhorn"></i>
							<span>Schedules</span></a>
						</li>
						<li className="" ><a href="#tab_f" className="nav-link" ><i className="fas fa-bullhorn"></i>
							<span>Users</span></a>
						</li>
						<li className="" ><a href="#tab_d" className="nav-link"><i className="fas fa-bullhorn"></i>
							<span>Settings</span></a>
						</li>
						<li className="" ><a href="#tab_e" className="nav-link" ><i className="fas fa-bullhorn"></i>
							<span>Referral Details</span></a>
						</li>
					</ul>
				</div>
			</nav>

			<div id="contentbox">
				<div className="tab-content">
					<div className="tab-pane active" id="tab_a">
						<div className="container">
							<div className="row">
								<div className="col-md-3">
									<div className="card-item card-text">
										<h4>Total Revenues</h4>
										<h2>$2,129,430</h2>
									</div>
								</div>
								<div className="col-md-3">
									<div className="card-item2 card-text">

										<h4>Total Transactions</h4>
										<h2>1,520</h2>
									</div>
								</div>
								<div className="col-md-3">
									<div className="card-item3 card-text">
										<h4>Total Likes</h4>
										<h2>9,721</h2>
									</div>
								</div>
								<div className="col-md-3">
									<div className="card-item4 card-text">
										<h4>Total Users</h4>
										<h2>892</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="LineChart">
						<LineChart></LineChart>
					</div>
					<div className="pieSection">
						<div className="PieChart">
							<PieChart></PieChart>
						</div>
						<div className="card"></div>
					</div>

				</div>
			</div>

		</div>

	);
};

export default Dashboard;
