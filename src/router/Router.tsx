import { Route, Routes } from "react-router-dom";

import { Home } from "@/pages/Home";
import { DefaultLayout } from "@/layout/DefaultLayout";
import { Issues } from "@/pages/Issues";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" key='home' element={<Home />} />
        <Route path="/issues/:id" key='issues' element={<Issues />} />
      </Route>
    </Routes>
  )
}