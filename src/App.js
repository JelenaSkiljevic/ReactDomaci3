import './App.css';
import { Main } from './components/Main';
import Products from './components/Products';
import NavBar from './components/NavBar';
import { useState } from "react";

function App() {
   const [products, setProducts] = useState([
      {
      id: 1,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/AhlgrensBilarOriginal125g_480x.jpg?v=1662288869",
      title: "Bilar Original",
      description:
           " Ahlgrens",
        price:"455,00",
    },
    {
      id: 2,
      url:"https://cdn.shopify.com/s/files/1/0005/4758/6092/products/MalacoGott_BlandatSalt150g_180x.jpg?v=1662839076",
      title: "Gott Blandat Salt",
      description:
             "Malaco",
     price:"455,00",
    },
    {
      id: 3,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/malaco-djungelvral-original-80g-scandinavian-goods-1_360x.jpg?v=1659178661",
      title: "Djungelvral Original",
      description:
          "Malaco",
        price:"455,00",
    },
     {
      id: 4,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/MalacoGott_BlandatOriginal160g_360x.jpg?v=1662298576",
      title: "Gott Blandat Original",
      description:
          "Malaco",
        price:"455,00",
    },
      {
      id: 5,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/SuosikitSuolainenSalmiakki230g_360x.jpg?v=1660742669",
      title: "Sousikit",
      description:
        "  Malaco",
        price:"455,00",
    },
      {
      id: 6,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/bubs-godis-hallonlakritsskalle-90g-495538_360x.jpg?v=1659179057",
      title: "SKALLE",
      description:
        "  Bubs Godis",
        price:"455,00",
    },
     {
      id: 7,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/dracula-piller-65g-304176_360x.jpg?v=1659179071",
      title: "Dracula Piller",
      description:
           " Salmiak",
        price:"455,00",
    },
    {
      id: 8,
      url:"https://cdn.shopify.com/s/files/1/0005/4758/6092/products/dragster-2000-super-sura-50g-299603_360x.jpg?v=1659180753",
      title: "Super Sura 2000",
      description:
             "Dragster",
     price:"455,00",
    },
    {
      id: 9,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/dragster-3000-super-salta-50g-423274_360x.jpg?v=1659180754",
      title: "Super Salta 3000",
      description:
          "Dragster",
        price:"455,00",
    },
     {
      id: 10,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/malaco-zoo-original-80g-scandinavian-goods-1_360x.png?v=1659178972",
      title: "Zoo original",
      description:
          "Malaco",
        price:"455,00",
    },
      {
      id: 11,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/bubs-godis-surskalle-90g-517487_480x.jpg?v=1659179058",
      title: "Sur SKALLE ",
      description:
        "  Bubs Godis",
        price:"455,00",
    },
      {
      id: 12,
      url: "https://cdn.shopify.com/s/files/1/0005/4758/6092/products/malaco-fizzypop-80g-scandinavian-goods-1_360x.jpg?v=1659178842",
      title: "Fizzypop",
      description:
        "  Malaco",
        price:"455,00",
    }

  ]);
  return (
    <div className="App">
      <NavBar />
        <Products products={products} />
    </div>
  );
  }

export default App;