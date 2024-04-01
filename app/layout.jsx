import '@/assets/styles/globals.css'

export const metadata = {
    title : 'Property pulse | Find the Perfect Rental',
    description : 'Find your dream rental property',
    keyword: 'rental,find rentals, find properties'
}

const MainLayout = ({children}) => {
  return (
    <html lang='fr'>
        <body>
        <div>{children}</div>
        </body>

    </html>
  )
}

export default MainLayout