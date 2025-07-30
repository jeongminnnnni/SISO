"use client"

import Header from "@/components/Header"
import ClassContent from "@/components/ClassContent"
import Footer from "@/components/Footer"
import { useAuth } from "@/contexts/AuthContext"
import PopularClasses from "@/components/PopularClasses"

export default function ClassPage() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {user ? <ClassContent /> : <PopularClasses />}
      <Footer />
    </div>
  )
}