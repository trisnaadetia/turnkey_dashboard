import React from 'react'
import Logo from '../assets/img/turnkeyid.png'
import { useHistory, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const navigation = useHistory()
  const location = useLocation()

    return (
      <div className="h-full space-y-5 justify-between">
        <div className="justify-center flex p-3 mt-12">
          <img src={Logo} className="w-36" alt='qlue' />
        </div>
        <div className="space-y-5">
          <div onClick={() => navigation.push('/')} className={
            location.pathname === "/" ? (
              "text-gray-100 bg-yellow-500 cursor-pointer rounded-r-2xl cursor-500 transition-colors duration-500"
            ) : (
              "text-gray-100 rounded-r-2xl cursor-pointer opacity-70 hover:opacity-100 transition duration-500"
            )
          }>
            <div className="flex space-x-3 p-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <p className="font-semibold text-xl">Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    )
}
