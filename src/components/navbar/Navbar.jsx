import {
	Chat,
	Notifications,
	Person,
	Search,
} from "@material-ui/icons";
import "./navbar.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navbarLeft">
				<span className="logo">Fakebook</span>
			</div>
			<div className="navbarCenter">
				<div className="searchBar">
					<Search className="searchIcon" />
					<input
						Placeholder="Search for friends, post or video"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="navbarRight">
				<div className="navbarLinks">
					<span className="navbarLink">Homepage</span>
					<span className="navbarLink">Timeline</span>
				</div>
				<div className="navbarIcons">
					<div className="navbarIconItem">
						<Person />
						<span className="navbarIconBadge">1</span>
					</div>
					<div className="navbarIconItem">
						<Chat />
						<span className="navbarIconBadge">1</span>
					</div>
					<div className="navbarIconItem">
						<Notifications />
						<span className="navbarIconBadge">1</span>
					</div>
				</div>
				<img
					src="/assets/person/1.jpeg"
					alt=""
					className="navbarImg"
				/>
			</div>
		</div>
	);
}
