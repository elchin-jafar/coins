import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ListofCoins from "./pages/ListofCoins";
import CoinDetailsPage from "./pages/CoinDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/coins",
      element: <ListofCoins />,
    },
    {
      path: "/coin-details/:id",
      element: <CoinDetailsPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
