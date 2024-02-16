import Navbar from '@/app/components/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <>
        <Navbar isBasic={true} />
        {children}
    </>
  )
}

export default DashboardLayout