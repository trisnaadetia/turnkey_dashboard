import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserPerPage } from '../store/action'

export default function Pagination() {
  const dispatch = useDispatch()
  const listUser = useSelector(state => state.userData)
  const [currentPage, setCurrentPage] = useState(1)
  const [listPage, setListPage] = useState([])
  const [lastIndexPage, setLastIndexPage] = useState(5)
  const [firstIndexPage, setFirstIndexPage] = useState(0)
  const limitPerPage = 5
  const totalPage = listUser.length / limitPerPage

  useEffect(() => {
    dispatch(setUserPerPage(listUser.slice(firstIndexPage, lastIndexPage)))
    createListPage()
  },[currentPage])

  const createListPage = () => {
    let listPage = []

    for(let i = 1; i <= totalPage; i++) {
      listPage.push(i)
    }
    setListPage(listPage)
  }

  const decrementPage = () => {
    if(currentPage > 1) {
      const newCurrentPage = currentPage - 1
      const newLastIndex = newCurrentPage * limitPerPage
      const newFirstIndex = newLastIndex - limitPerPage

      setCurrentPage(newCurrentPage)
      setLastIndexPage(newLastIndex)
      setFirstIndexPage(newFirstIndex)
    }
  }

  const incrementPage = () => {
    if(currentPage < totalPage) {
      const newCurrentPage = currentPage + 1
      const newLastIndex = newCurrentPage * limitPerPage
      const newFirstIndex = newLastIndex - limitPerPage

      setCurrentPage(newCurrentPage)
      setLastIndexPage(newLastIndex)
      setFirstIndexPage(newFirstIndex)
    } 
  }

  const handleClickPage = (pageNumber) => {
    const newLastIndex = pageNumber * limitPerPage
    const newFirstIndex = newLastIndex - limitPerPage

    setCurrentPage(pageNumber)
    setLastIndexPage(newLastIndex)
    setFirstIndexPage(newFirstIndex)
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <p className="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-blue-100"
              onClick={() => decrementPage()}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </p>
            {
              listPage.map((page,idx) => {
                return (
                  <p key={idx} className={
                    currentPage === page ? (
                      "bg-gray-300 cursor-pointer border-gray-300 text-gray-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    ) : "bg-white cursor-pointer border-gray-300 text-gray-800 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  }
                    onClick={() => handleClickPage(page)}
                  >
                    { page }
                  </p>
                )
              })
            }
            <p className="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-blue-100"
              onClick={() => incrementPage()}
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </p>
          </nav>
        </div>
      </div>
    </div>
  )
}