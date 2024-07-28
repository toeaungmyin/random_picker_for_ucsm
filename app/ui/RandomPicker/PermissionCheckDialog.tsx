import { Button } from "@/app/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Item } from "@prisma/client"
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/navigation'
const key = "i don't know"
export function PermissionCheckDialog({ finalPick }: { finalPick: Item }) {
  const router = useRouter();

  const [pass, setPass] = useState<string>(`${key}`)
  
  const pickItemWithId = async () => {
        const allow = pass === `${key}`
        if (finalPick && allow) {
            try {
                await axios.post('/api/pick-item', { id: finalPick.id });
                router.push('random-picker/picked-items');
            } catch (error) {
                console.error('Error picking item:', error);
            }
        }
    };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex gap-2 text-white px-10 py-6 text-lg font-bold bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-300'>
            Done
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Permission Check</DialogTitle>
          <DialogDescription>
            Anyone who has the permission to be able to do this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="pass" className="sr-only">
              Pass Key
            </Label>
            <Input
              id="pass"
              defaultValue="i don't know"
              onChange={(e) => {
                setPass(e.target.value)
              }}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button onClick={pickItemWithId} type="button" variant="secondary">
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
