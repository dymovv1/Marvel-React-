import Header from '../Header/header'
import { Outlet } from 'react-router-dom'
import Footer from "../Footer/index.jsx";



function Layout() {
  return (
    <>
      <Header />
      <main className=''>
        <div>
          <Outlet />
        </div>
      </main>
        <Footer/>
    </>
  )
}

export default Layout