import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../comp/Header'
import Footer from '../comp/Footer'


function Home(props){
  // let arr=[]
  // var x = Math.floor((Math.random() * 10) + 1);
  var arr = [];
  while(arr.length < 10){
    var r = Math.floor(Math.random() * 2370) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  
 

  return(
    <>
    <main>
    <Header />
    <h1>XKCD</h1>
    <img src={props.comic.img} />
    <p>Previouse 10</p>
    </main>
    <Footer single={arr}/>
    </>
  )
}


export async function getServerSideProps(){
  const res = await fetch('https://xkcd.com/info.0.json')
  const myData = await res.json();
  console.log(myData)
  return {props:{comic: myData}};
}


// export async function getServerSideProps;
export default Home;




// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
