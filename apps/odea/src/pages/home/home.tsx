import React, {useEffect, useState} from "react";
import {Hero, Description, ShopFilters, Shop} from "@react-monorepo/odea-components";
import Style from './home.styled'
import axios from "axios";

const API = 'http://localhost:3000'
const PRODUCTS_URL = 'products'
const SHOP_ID = 1


function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${API}/${PRODUCTS_URL}?shopId=${SHOP_ID}`)
      setProducts(response.data);
    })()
  }, [])

  return (
    <div>
      <Hero/>
      <Description/>
      {
        products.length > 0 && <Style.Sections>
          <ShopFilters/>
          <Shop products={products}/>
        </Style.Sections>
      }

    </div>
  );
}

export default Home
