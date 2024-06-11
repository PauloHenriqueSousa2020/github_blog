import { Route, Routes } from "react-router-dom";

import { Home } from "@/pages/Home";
import { DefaultLayout } from "@/layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>

      <Route path="/" key='home' element={<Home />} />
      </Route>
    </Routes>
  )
}