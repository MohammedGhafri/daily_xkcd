import Link from 'next/link'
// import styles from  '../styles/header.css'

function Header() {
    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>HOME</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>ABOUT</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    );
}

export default Header;