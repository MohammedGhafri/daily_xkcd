import Footer from "../../comp/Footer";
import Header from "../../comp/Header";



// import Header from '../comp/Header'
// import Footer from '../comp/Footer'


export default function singleView(props){
    return(
        <>
        <main>
        < Header />
        <div className="infoDiv">
        <h1>{props.info.safe_title}</h1>
        <img src ={props.info.img}/>
        </div>
        </main>
        {/* < Footer /> */}
</>
    );
}


export async function getServerSideProps(context){
    const id=context.query.id
    const res= await fetch(`https://xkcd.com/${id}/info.0.json`)
    const singleData = await res.json();
    return {props: {info: singleData}}
}