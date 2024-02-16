import Navbar from '@/app/components/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default DashboardLayout