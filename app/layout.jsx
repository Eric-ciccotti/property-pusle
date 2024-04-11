import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title : 'Property pulse | Find the Perfect Rental',
    description : 'Find your dream rental property',
    keyword: 'rental,find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <html lang='fr'>
        <body>
            <Navbar />
             <main>{children}</main>
        </body>

    </html>
  )
}

export default MainLayout;