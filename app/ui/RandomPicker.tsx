'use client'

import React from 'react'
import FileInput from './FileInput'
import RandomGrid from './RandomGrid';

function RandomPicker() {
    const [list, setList] = React.useState<string[]>([]);
    
    return (
        <div className='flex flex-col justify-center items-center gap-12'>
            {list.length === 0 && <FileInput setList={setList} />}
            {list.length > 0 && <RandomGrid list={list} />}
        </div>
    )
}

export default RandomPicker