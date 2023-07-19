import Screen from "./screen";
import Blogpost from "./blogs/blogPost";
import Nav from "./nav";
import Footer from "./footer";
function App() {
  return (
    
     <div className='max-w-[50rem] mx-auto shadow-2xl  min-h-[100vh] box-border    flex flex-grow flex-col  ' style={{ backgroundImage: ` linear-gradient(to right, #FCAF45, #FF5A6B, #C13584, #352A71)` }}>
        <Nav/>
        <Screen />
        {/* <Blogpost/> */}
        <Footer/>
      </div>
    
  );
}

export default App;
