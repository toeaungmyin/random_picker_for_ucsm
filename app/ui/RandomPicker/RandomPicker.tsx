import React from 'react'
import RandomGrid from './RandomGrid';
import { Item, Prisma } from '@prisma/client';

function RandomPicker({items}: {items: Item[]}) {
    
    return (
        <div className='w-full flex flex-col justify-center items-center gap-12'>
            {items.length > 0 && <RandomGrid items={items} />}
        </div>
    )
}

export default RandomPicker