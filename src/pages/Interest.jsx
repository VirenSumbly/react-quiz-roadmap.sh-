import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
export default function Interest(){
    const navigate = useNavigate()
    return(
        
        <div className="flex items-center justify-center min-h-screen  bg-purple-800">
        <div className="flex flex-col w-full max-w-md  p-6 rounded-xl gap-4 bg-white">
        <Label className='text-3xl text-center'>What Do You Know Most About?</Label>
        <Input className='p-4' placeholder='Your Answer'></Input>
        <Textarea className='p-3' placeholder='describe in detail/extra context'></Textarea>
        <div className="flex gap-2">
            <Button onClick={()=>{navigate('/questions')}} className='flex-1'>Submit</Button>
            <Button variant="outline"  className='flex-1 bg-white  text-black border-black '>Cancel</Button>
        </div>
        </div>
        </div>
        
    )
}