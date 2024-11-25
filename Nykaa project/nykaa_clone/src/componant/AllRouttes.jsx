import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";
import { Brands } from "../pages/Brands";

import { Luxe } from "../pages/Luxe";
import { NykaaFashion } from "../pages/NykaaFashion";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";
import { Makeup } from "../pages/SalePage/Makeup";
import { Skin } from "../pages/SalePage/Skin";
import { Hair } from "../pages/SalePage/Hair";
import { BathBody } from "../pages/SalePage/BathBody";
import { Natural } from "../pages/SalePage/Natural";
import { MomBaby } from "../pages/SalePage/MomBaby";
import { HealthWellness } from "../pages/SalePage/HealthWellness";
import { Men } from "../pages/SalePage/Men";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/luxe" element={<Luxe />} />
      <Route path="/nykaa_fashion" element={<NykaaFashion />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />

      <Route path=""></Route>
      <Route path="makeup_sale" element={<Makeup />}></Route>
      <Route path="skin_sale" element={<Skin />}></Route>
      <Route path="hair_sale" element={<Hair />}></Route>
      <Route path="Bath_body_sale" element={<BathBody />}></Route>
      <Route path="natural" element={<Natural />}></Route>
      <Route path="mom_baby" element={<MomBaby />}></Route>
      <Route path="health_wellness" element={<HealthWellness />}></Route>
      <Route path="men" element={<Men />}></Route>
    </Routes>
  );
};
