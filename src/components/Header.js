import { useNavigate } from 'react-router-dom';
import "../css/layout.css"
import { useEffect, useState } from 'react';

const Home = () => {

  // const [position,setScroll] = useState(0);
  // function onScroll() {
  //   setScroll(window.scrollY);
  // console.log(position);
  // }

  // useEffect(()=>{
  //   window.addEventListener('scroll',onScroll);
  //   return () =>{
  //     window.removeEventListener('scroll',onScroll);
  //   }
  // },[]);

  
  const navigate = useNavigate();

  return (
    <>
      <header id="header">
        <div className="head-inner">
          <div className="logo">
            <h1>
              <a href=""onClick={() => { navigate('/Main'); }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.054 36.257"><g id="ChangbiLogo" transform="translate(0)"><path id="패스_18" data-name="패스 18" d="M26.368,8.514v5.278H22.562V.006h3.806v5.2h2.8V8.514Z" transform="translate(-4.813 -0.002)" fill="#333"></path> <path id="패스_19" data-name="패스 19" d="M34.462,11.08h3.775v3.543h3.38V11.08h3.766V24.852H34.462Zm7.155,6.8h-3.38V21.56h3.38Z" transform="translate(-7.351 -2.364)" fill="#333"></path> <rect id="사각형_23" data-name="사각형 23" width="3.766" height="13.79" transform="translate(42.289)" fill="#333"></rect> <path id="패스_20" data-name="패스 20" d="M23.308,29.974a6.338,6.338,0,1,0,6.336,6.337,6.339,6.339,0,0,0-6.336-6.337m0,8.961a2.624,2.624,0,1,1,2.624-2.624,2.621,2.621,0,0,1-2.624,2.624" transform="translate(-3.62 -6.394)" fill="#333"></path> <path id="패스_21" data-name="패스 21" d="M6.879,20.555,3,25.542,0,23.193l5.006-6.151V15.818H1.064v-3.29H5.006V9.433H8.744v3.095h3.963v3.29H8.744v1.224l4.906,6.151-2.886,2.349Z" transform="translate(0 -2.012)" fill="#333"></path></g></svg>
              </a>
            </h1>
          </div>
          <div className="lang">
            <button className="btn-search" onClick={() => { navigate('/Search'); }}>책 검색</button> 
          </div>
        </div>
      </header>
    </>
  )
}

export default Home;
