"use client"

import Header from "@/components/Header"
import TravelContent from "@/components/TravelContent"
import Footer from "@/components/Footer"
import { useAuth } from "@/contexts/AuthContext"
import PopularTravel from "@/components/PopularTravel"

export default function TravelPage() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {user ? <TravelContent /> : <PopularTravel />}
      <Footer />
    </div>
  )
}