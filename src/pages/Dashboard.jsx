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
      <div className="w-1/4 mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search user here..."
            name="keyword"
          />
        </div>
        <table className="min-w-full shadow leading-normal">
          <thead>
            <tr>
              <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                User
              </th>
              <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                Email
              </th>
              <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                Phone
              </th>
              <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left font-bold text-sm uppercase font-normal">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map(user => <TableData user={user}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
