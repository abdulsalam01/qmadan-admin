import React from 'react'
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

export default function Home() {

  return (
    <div className="container-fluid">
      <Header title='Dashboard' description='dashboard-admin'/>
        <h2>Dashboard Admin Qismi is Here!</h2>
      <Footer />
    </div>
  )
}
