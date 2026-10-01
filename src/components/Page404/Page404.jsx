import './Page404.css'
import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <div className="not-found">

            <h1>404</h1>

            <h2>Page not found</h2>

            <p>
                The page you are looking for does not exist.
            </p>

            <button onClick={() => navigate("/")}>
                Back Home
            </button>

        </div>
    );
}