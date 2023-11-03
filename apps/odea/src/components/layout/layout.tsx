import NavigationBar from "../navigation-bar/navigation-bar";
import {Outlet} from "react-router-dom";
import React from "react";
import Footer from "../footer/footer";
import Style from "./layout.styled";

function Layout() {
  return (
    <div>
      <NavigationBar/>

      <Style.Container>
        <Outlet/>
      </Style.Container>

      <Footer/>
    </div>
  );
}

export default Layout
