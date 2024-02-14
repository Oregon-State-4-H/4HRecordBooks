import Navbar from "../components/Navbar"

const DashboardLayout = ({ children }) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default DashboardLayout