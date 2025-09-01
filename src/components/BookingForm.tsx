'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

export default function BookingForm() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')

  return (
    <Card className="w-full max-w-lg bg-white shadow-lg border-0 rounded-lg p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Request a ride now</h3>
        
        <div className="space-y-3">
          <div className="relative">
            <div className="absolute left-3 top-3 w-2 h-2 bg-green-500 rounded-full"></div>
            <Input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="pl-8 py-3 border-gray-200 focus:border-black focus:ring-black"
            />
          </div>
          
          <div className="relative">
            <div className="absolute left-3 top-3 w-2 h-2 bg-red-500 rounded-full"></div>
            <Input
              type="text"
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-8 py-3 border-gray-200 focus:border-black focus:ring-black"
            />
          </div>
        </div>

        <div className="flex space-x-2 pt-2">
          <Button className="flex-1 bg-black text-white hover:bg-gray-800 py-3 font-medium">
            Request now
          </Button>
          <Button variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3">
            Schedule for later
          </Button>
        </div>

        <div className="pt-2 border-t border-gray-100">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Ride options</span>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1 hover:text-gray-900">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <span>RideShare</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-gray-900">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <span>Premium</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}