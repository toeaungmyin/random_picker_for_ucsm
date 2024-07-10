import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function FileInput({ setList }: { setList: React.Dispatch<React.SetStateAction<string[]>> }) {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const fileReader = new FileReader();
            
            fileReader.onload = (e) => {
                const fileContent = e.target?.result as string;
                const list = fileContent.split('\n');
                setList(list);
            };
            
            fileReader.readAsText(files[0]);
        }
    };

  return (
    <div className="grid w-full max-w-xs items-center gap-1.5">
        <Label htmlFor="picture" className='border-4 border-dashed border-blue-950 p-12 rounded-lg text-center text-lg font-semibold cursor-pointer'>
                Upload File
        </Label>
        <Input onChange={(e)=>handleOnChange(e)} className='hidden' id="picture" type="file" />
    </div>
  )
}

export default FileInput