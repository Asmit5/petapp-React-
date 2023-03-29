
import './App.css';
import Heading from './component/heading/Heading';
import About from './component/aboutus/About';
import Flex from './component/flex1/Flex';
import { Navbar } from './component/navbar/Navbar';
import { Picture } from './component/picture/Picture';
import Pet from './component/petcollection/Pet';
import Orange11 from './component/orange/Orange11';
import Petfood from './component/petfood/Petfood';
import Blog from './component/blog/Blog';
import Footer from './component/footer/Footer';




function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Navbar></Navbar>
      <Picture></Picture>
      <About></About>
      <Flex></Flex>
      <Pet></Pet>
      <Orange11></Orange11>
      <Petfood></Petfood>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
