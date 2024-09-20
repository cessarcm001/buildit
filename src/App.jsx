import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import ErrorPage from "./error-page";
import List from "./pages/list/List";
import Maquina from "./pages/maquina/Maquina";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: "/Maquinaria",
    element: <List />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Maquinaria/:id",
    element: <Maquina />,
    errorElement: <ErrorPage />,
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
