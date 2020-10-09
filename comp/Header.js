import Link from'next/link'
// import '../styles/header.css'

function Header(){
    return(
    <nav>
        <ul>
            <li>
                <Link href="/">
                <a>HOME</a>
                </Link>
            </li>
            <li>
                <Link href="about">
                <a>ABOUT</a>
                </Link>
            </li>
        </ul>
    </nav>
    );
}

export default Header;