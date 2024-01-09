import { Separator } from '@radix-ui/react-dropdown-menu'
import React from 'react'

const Feauture = () => {
  return (
    <div className=' w-full bg-[#EDF7FA]'>
      <div className=' container mx-auto'>
        <div className=' flex justify-between items-center'>
          <div>
            <span className="text-xl font-['Heebo'] leading-[60px] text-[#21243d] w-min">
              Recent ports
            </span>
            <div>
              <h1 >Making a design system from scratch</h1>
              <span>12 Feb 2020</span>
              <Separator orientation="vertical" />
              <span>Design , Pattern</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feauture