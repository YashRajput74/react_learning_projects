import { BrowserRouter as Router, Route, Routes, Link, useParams, Outlet, Navigate, useSearchParams, useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate();
    function handleGoToAbout(){
        navigate("/about");
    }

    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={handleGoToAbout}>Go to About</button>
        </div>
    )
}

function About() {
    return (
        <div>
            <h2>About Page</h2>
            <Outlet />
        </div>
    )
}

function Team() {
    return (
        <h2>Teams</h2>
    )
}

function History() {
    return (
        <h2>History</h2>
    )
}

function UserProfile() {
    const { userId } = useParams();
    return (
        <h2>User Profile of {userId}</h2>
    )
}

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

function Dashboard() {
    return (
        <h2>Dashboard</h2>
    )
}

function ProtectedRoute({ children, isLoggedIn }) {
    return (
        isLoggedIn ? children : <Navigate to="/login" />
    )
}

function LogIn() {
    return (
        <h2>Log In</h2>
    )
}

function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("product");
    return (
        <h2>Search Results for: {query}</h2>
    )
}

function NotFound() {
    return (
        <h2>404 Page not found.</h2>
    )
}

export default function App() {
    const isLoggedIn = false;

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="history" element={<History />} />
                </Route>
                <Route path="/user/:userId" element={<UserProfile />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute isLoggedIn={ isLoggedIn }>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="/login" element={<LogIn />} />
                <Route path="/search" element={<SearchPage />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    )
}