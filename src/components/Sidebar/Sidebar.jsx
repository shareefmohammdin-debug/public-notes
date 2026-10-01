import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
        <aside className="sidebar">

            <div className="sidebar-title">
                MENU
            </div>


            <nav className="sidebar-menu">

                <Link to="/" className="sidebar-link">
                    <span className="sidebar-icon">🏠</span>
                    <span>Home</span>
                </Link>


                <Link to="/show/all" className="sidebar-link">
                    <span className="sidebar-icon">📒</span>
                    <span>All Notes</span>
                </Link>


                <Link to="/show/links" className="sidebar-link">
                    <span className="sidebar-icon">🔗</span>
                    <span>Links</span>
                </Link>


                <Link to="/show/notes" className="sidebar-link">
                    <span className="sidebar-icon">📝</span>
                    <span>Notes</span>
                </Link>


                <Link to="/show/Favorites" className="sidebar-link">
                    <span className="sidebar-icon">⭐</span>
                    <span>Favorites</span>
                </Link>


                <Link to="/show/Archive" className="sidebar-link">
                    <span className="sidebar-icon">📦</span>
                    <span>Archive</span>
                </Link>

                <Link to="https://github.com/shareefmohammdin-debug" className="sidebar-link">
                    <span className="sidebar-icon">🧑‍💻</span>
                    <span>About</span>
                </Link>

            </nav>


            <div className="sidebar-bottom">

                <Link to="/add" className="sidebar-add">
                    <span>＋</span>
                    <span>New Note</span>
                </Link>

            </div>

        </aside>
    );
}
