import Link from'next/link'
// import '../styles/footer.css'


function Footer(props){
    console.log("Form footer",props)
    return(
<>
<ul className="footerLi">
    {props.single.map((elem)=>
    <Link key={elem} href="/single/[id].js" as={`/single/${elem}`}>
    <li>
    <a>{elem}</a>
    </li>
    </Link>
    )}
    {/* props.single.map(()) */}

</ul>
<footer> All rights Reserved Ghafri; 2020</footer>
</>
    )
}

export default Footer;