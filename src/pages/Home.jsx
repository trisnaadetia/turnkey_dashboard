import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Dashboard from '../pages/Dashboard'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar />
      <div className="flex-1 px-12 py-6">
        <div className="bg-blue-100 h-full w-full rounded-3xl p-10 overflow-auto">
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
