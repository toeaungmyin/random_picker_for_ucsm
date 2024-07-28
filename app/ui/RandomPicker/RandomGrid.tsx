'use client'
import { Button } from '@/app/components/ui/button'
import { Item } from '@prisma/client';
import React, { useState } from 'react'
import { PermissionCheckDialog } from './PermissionCheckDialog';

const classes = {
    unPick: 'aspect-[3/1] w-full h-full flex justify-center items-center border-4 border-blue-950 p-4 rounded-lg text-center text-sm md:text-lg font-semibold transition-opicity duration-500',
    tempPick: 'bg-blue-500 aspect-[3/1] w-full h-full flex justify-center items-center border-4 border-blue-950 p-4 rounded-lg text-center text-sm md:text-lg font-semibold transition-opicity duration-500',
}

function RandomGrid({items}: {items: Item[]}) {
    const [tempPick, setTempPick] = useState<Item | null>(null);
    const [finalPick, setFinalPick] = useState<Item | null>(null);
    
    // version 1 random pick 

    // const chooseRandom = () => {
    //     let previousRandom: Item | null = null;

    //     for (let index = 0; index < items.length; index++) {
    //         setTimeout(() => {
    //             let randomIndex;
    //             do {
    //                 randomIndex = Math.floor(Math.random() * items.length);
    //             } while (items[randomIndex] === previousRandom);

    //             previousRandom = items[randomIndex];
    //             setTempPick(previousRandom);

    //             if (index === items.length - 1) {
    //                 setTimeout(() => {
    //                     setFinalPick(previousRandom);
    //                 }, 500);
    //             }
    //         }, 300 * (index + 1));
    //     }
    // };

    // version 2 random pick base on poss
    // const chooseRandom = () => {
    //     let previousRandom: Item | null = null;

    //     const cumulativeProbabilities: number[] = [];
    //     let cumulativeSum = 0;

    //     items.forEach(item => {
    //         cumulativeSum += item.possibility;
    //         cumulativeProbabilities.push(cumulativeSum);
    //     });

    //     const pickRandomItem = (): Item => {
    //         const randomNum = Math.random() * cumulativeSum;
    //         for (let i = 0; i < items.length; i++) {
    //             if (randomNum < cumulativeProbabilities[i]) {
    //                 return items[i];
    //             }
    //         }
    //         return items[items.length - 1];
    //     };

    //     for (let index = 0; index < items.length; index++) {
    //         setTimeout(() => {
    //             let currentRandom: Item;

    //             do {
    //                 currentRandom = pickRandomItem();
    //             } while (currentRandom === previousRandom);

    //             previousRandom = currentRandom;
    //             setTempPick(currentRandom);

    //             if (index === items.length - 1) {
    //                 setTimeout(() => {
    //                     setFinalPick(currentRandom);
    //                 }, 500);
    //             }
    //         }, 300 * (index + 1));
    //     }
    // };
    
    const chooseRandom = (items: Item[]) => {
        let previousRandom: Item | null = null;

        const cumulativeProbabilities: number[] = [];
        let cumulativeSum = 0;

        items.forEach(item => {
            cumulativeSum += item.possibility;
            cumulativeProbabilities.push(cumulativeSum);
        });

        const pickRandomItem = (): Item => {
            const randomNum = Math.random() * cumulativeSum;
            for (let i = 0; i < items.length; i++) {
                if (randomNum < cumulativeProbabilities[i]) {
                    return items[i];
                }
            }
            return items[items.length - 1];
        };

        for (let index = 0; index < items.length; index++) {
            setTimeout(() => {
                let currentRandom: Item;

                do {
                    currentRandom = pickRandomItem();
                } while (currentRandom === previousRandom);

                previousRandom = currentRandom;
                setTempPick(currentRandom);

                if (index === items.length - 1) {
                    setTimeout(() => {
                        setFinalPick(currentRandom);
                    }, 500);
                }
            }, 300 * (index + 1));
        }
    };

    const reset = () => {
        setFinalPick(null)
        setTempPick(null)
    }

    return (
    <div className="flex flex-col justify-center items-center gap-4 p-12">
        {!finalPick ? (
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {items.map((item, index) => (
                    <div key={index} className={item === tempPick ? classes.tempPick : classes.unPick}>
                        {item.name}
                    </div>
                ))}
            </div>
        ) : (
            <div className='bg-blue-500 aspect-[2/1] w-96 md:w-[40rem] text-4xl md:text-6xl flex justify-center items-center border-4 border-blue-950 p-4 rounded-lg text-center font-bold transition-opicity duration-500'>{finalPick.name}</div>
        )}
            
        {!finalPick ? (
            <Button onClick={() => chooseRandom(items)} className='px-12 text-white py-8 text-lg font-bold bg-blue-500 focus:ring-2 focus:ring-blue-300'>Pick a Name</Button>
            ) : ( 
            <div className='flex gap-2'>
                
                <PermissionCheckDialog finalPick={finalPick} />

                <Button onClick={reset} className='flex gap-2 text-white px-10 py-6 text-lg font-bold bg-blue-500 focus:ring-2 focus:ring-blue-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                    Reset
                </Button>
            </div>
        )}
    </div>
  )
}

export default RandomGrid