import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'

const MainLayout = ({children}) => {
  return (
    <>
    <Header />
    <main>
    {children}
    </main>
    <Footer />
    </>
  )
}

export default MainLayout