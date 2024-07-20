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

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/">
        <Route index element={<Layout />} />
      </Route>
      <Route path="/login" element={<Login />}/>
    </Route>
  ))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
