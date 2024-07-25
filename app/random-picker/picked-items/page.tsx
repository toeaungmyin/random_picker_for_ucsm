import React from 'react'
import ItemService from '@/app/service/ItemService';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table"
  
async function page() {
  
  const items = await ItemService.findAll();
  
    return (
        <div className='w-full min-h-[82vh] flex justify-center items-center gap-2'>
            <div className="w-full max-w-screen-md py-12">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">No</TableHead>
                            <TableHead className="w-[100px]">MKPT</TableHead>
                            <TableHead>NAME</TableHead>
                            <TableHead>PICKED AT</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {items && items.map((item, index) => (
                            <TableRow key={item.name}>
                                <TableCell className="font-medium">{index+1}</TableCell>
                                <TableCell className="font-medium">{`MKPT-${item.mkpt}`}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.picked_at ? new Date(item.picked_at).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }) : null}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default page