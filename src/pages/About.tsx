import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function About() {
    return (
        <>
            Coming soon.
            <Nav.Link to='/store' as={NavLink}>
                <span style={{textDecoration:'underline'}}>Go to Store</span>
            </Nav.Link>
        </>
    )
}




