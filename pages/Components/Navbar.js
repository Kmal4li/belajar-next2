import Link from "next/link"
const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <link href="\">Home</link>
                </li>
                <li>
                    <link href="\about">About</link>
                </li>
                <li>
                    <link href="\profile">Profile</link>
                </li>
                <li>
                    <link href="\contact">Contact</link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;