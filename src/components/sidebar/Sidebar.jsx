import "./sidebar.css";
import {
	RssFeed,
	Bookmark,
	Chat,
	Group,
	HelpOutline,
	School,
	VideoLibrary,
	WorkOutlineOutlined,
	Event,
} from "@material-ui/icons";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">
							Feed
						</span>
					</li>

					<li className="sidebarListItem">
						<Chat className="sidebarIcon" />
						<span className="sidebarListItemText">
							Chat
						</span>
					</li>
					<li className="sidebarListItem">
						<VideoLibrary className="sidebarIcon" />
						<span className="sidebarListItemText">
							Videos
						</span>
					</li>
					<li className="sidebarListItem">
						<Group className="sidebarIcon" />
						<span className="sidebarListItemText">
							groups
						</span>
					</li>
					<li className="sidebarListItem">
						<Bookmark className="sidebarIcon" />
						<span className="sidebarListItemText">
							Feed
						</span>
					</li>
					<li className="sidebarListItem">
						<HelpOutline className="sidebarIcon" />
						<span className="sidebarListItemText">
							Feed
						</span>
					</li>
					<li className="sidebarListItem">
						<WorkOutlineOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">
							Feed
						</span>
					</li>
					<li className="sidebarListItem">
						<WorkOutlineOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">
							Feed
						</span>
					</li>
					<li className="sidebarListItem">
						<Event className="sidebarIcon" />
						<span className="sidebarListItemText">
							Feed
						</span>
						<li className="sidebarListItem">
							<School className="sidebarIcon" />
							<span className="sidebarListItemText">
								Feed
							</span>
						</li>
					</li>
				</ul>
			</div>
		</div>
	);
}
