import { 
  Suspense,
  lazy 
} from "react"
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom"

const Login = lazy (() => import('./pages/Login'))
const Layout = lazy (() => import('./pages/Layout'))
const Signup = lazy (() => import('./pages/Signup'))
const Landingpage = lazy (() => import('./pages/Landingpage'))

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/">
        <Route index element={<Landingpage />} />
      </Route>
      <Route path="/marketplace">
        <Route index element={<Layout />} />
      </Route>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Route>
  ))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
