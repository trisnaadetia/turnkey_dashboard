import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../store/action'
import TableData from '../components/TableData'
import LoadingPlacehoder from '../components/LoadingPlaceholder'

export default function Dashboard() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  const userData = useSelector(state => state.userData)

  useEffect(() => {
    dispatch(fetchUser())
  },[])

  if(loading) {
    return (
      <LoadingPlacehoder/>
    )
  }

  return (
    <div>
      <div className="flex">
        <div className="bg-gray-800 p-3 text-gray-200 rounded-lg">
          <p className="font-semibold text-2xl">Dashboard</p>
        </div>
      </div>
      <div className="mt-10">
        
      </div>
    </div>
  )
}
