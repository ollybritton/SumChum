import "./Header.css"
import { Link, useLocation } from "react-router-dom"
import quizzes from "./quizzes.js";

export default function Header() {
    let location = useLocation();
    console.log(location.pathname)

    let page = <span />;

    if (location.pathname == "/") {
        page = "Home";
    } else if (quizzes[location.pathname] != undefined) {
        page = quizzes[location.pathname].info.pageTitle
    }

    return (
        <div className="Header">
            <h3 className="Header-title">
                <Link to="/">SumChum</Link>
                <span className="Header-page"> //&nbsp;{page}</span>
            </h3>
        </div>
    )
}