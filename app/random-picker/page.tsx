import React from 'react'
import RandomPicker from '../ui/RandomPicker/RandomPicker'
import ItemService from '@/app/service/ItemService';
  
async function page() {
  
  const items = await ItemService.where({picked_at: null});
  
  return (
    <div className='w-full min-h-[82vh] flex justify-center items-center gap-2'>
        <RandomPicker items={items} />
    </div>
  )
}

export default page