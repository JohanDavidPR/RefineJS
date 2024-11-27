import { Routes, Route } from "react-router-dom";
import { Private } from "./Private";
import { Users } from "../modules";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Private />}>
        <Route index element={<div>Home</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Route>
      <Route path="/login" element={<div>Inicar sesion</div>} />
      <Route path="/users" element={<Users />} />
      <Route path="/*" element={<div>Not Found</div>} />
    </Routes>
  );
};
