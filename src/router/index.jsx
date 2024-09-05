import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Home, Artist, Auth,Nft } from "@pages";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="artist" element={<Artist />} />
        <Route path="nft-page" element={<Nft />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default Index;
