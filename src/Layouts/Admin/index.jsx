import { Outlet } from "react-router-dom"
import SideBar from "./components/sidebar"
import AdminHeader from "./components/Admin-Header"

import './assets/css/bootstrap.min.css'
import './assets/css/lineicons.css'
// import './assets/css/materialdesignicons.min.css'
import './assets/css/fullcalendar.css'
import './assets/css/fullcalendar.css'
import './assets/css/main.css'
import './assets/js/bootstrap.bundle.min.js'
// import './assets/js/main.js'

export const AdminLayout = () => {
    return (
        <>
                <SideBar />
                    <main class="main-wrapper">
                        <AdminHeader/>
                        <Outlet />
                    </main>
        </>
    )
}