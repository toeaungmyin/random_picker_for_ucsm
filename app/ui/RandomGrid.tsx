import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const classes = {
    unPick: 'aspect-[2/1] w-full h-full flex justify-center items-center border-4 border-blue-950 p-4 rounded-lg text-center text-sm md:text-lg font-semibold transition-opicity duration-500',
    tempPick: 'bg-blue-500 aspect-[2/1] w-full h-full flex justify-center items-center border-4 border-blue-950 p-4 rounded-lg text-center text-sm md:text-lg font-semibold transition-opicity duration-500',
}
function RandomGrid({ list }: { list: string[] }) {
    const [tempPick, setTempPick] = useState('');
    const [finalPick, setFinalPick] = useState('');

    const chooseRandom = () => {
        let previousRandom = '';

        for (let index = 0; index < list.length; index++) {
            setTimeout(() => {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * list.length);
                } while (list[randomIndex] === previousRandom);

                previousRandom = list[randomIndex];
                setTempPick(previousRandom);

                if (index === list.length - 1) {
                    setTimeout(() => {
                       setFinalPick(previousRandom); 
                    }, 500);
                }
            }, 300 * (index + 1));
        }
    };

    const reset = () => {
        setFinalPick('')
        setTempPick('')
    }

    return (
        <div className="flex flex-col justify-center items-center gap-12 p-2">
            {finalPick === '' ? (
                <Button onClick={chooseRandom} className='px-12 text-white py-8 text-lg font-bold bg-gradient-to-r from-indigo-500 via-cyan-500 to-green-500 focus:ring-2 focus:ring-blue-300'>Pick a Name</Button>
            ) : (
                <Button onClick={reset} className='flex gap-2 text-white px-12 py-8 text-lg font-bold bg-gradient-to-r from-indigo-500 via-cyan-500 to-green-500 focus:ring-2 focus:ring-blue-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                    Reset
                </Button>
            )}
        
        {finalPick === '' ? (
            <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4'>
                {list.map((item, index) => (
                    <div key={index} className={item === tempPick ? classes.tempPick : classes.unPick}>
                        {item}
                    </div>
                ))}
            </div>
        ) : (
            <div className='bg-blue-500 aspect-[2/1] w-96 md:w-[40rem] text-4xl md:text-6xl flex justify-center items-center border-4 border-blue-950 p-4 rounded-lg text-center font-bold transition-opicity duration-500'>{finalPick}</div>
        )}

    </div>
  )
}

export default RandomGrid