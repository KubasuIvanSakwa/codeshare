import {
  lazy,
  Suspense
} from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"


import Loader from "./components/Loader"
const Login = lazy(() => import('./pages/Login'))
const Layout = lazy(() => import('./pages/Layout'))
const Signup = lazy(() => import('./pages/Signup'))
const Landingpage = lazy(() => import('./pages/Landingpage'))
const Profile = lazy(() => import('./pages/Profile'))
const MarketPlace = lazy(() => import('./components/MarketPlace'))

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/companyprofile">
        <Route index element={<Landingpage />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  ))

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
