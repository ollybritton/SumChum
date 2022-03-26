import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1>Welcome to SumChum</h1>
            <p>This is a small website for practicing mental mathematics, such as <Link to="/multiply">multiplication</Link>, factorisation and working out the day of the week for any given date. Each page will generate questions and will reveal the answer if you tap or press the enter key. They will also provide some information about strategies for doing the calculations quickly in your head.</p>
        </div>
    )
}