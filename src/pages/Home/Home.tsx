import "./Home.css";
import Carrousel from "../../components/Carrousel/Carrousel.tsx";
import ProductList from '../../components/ProductList/ProductList.tsx';


const Home = () => {
  return (
    <>
    <Carrousel></Carrousel>
    <ProductList></ProductList>
    </>
  )
}

export default Home