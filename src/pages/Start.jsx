import { Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent, } from "@/components/ui/card1";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";




export default function Start() {
    
    const navigate = useNavigate();
    
    //w-full max-w-sm p-6 flex flex-col gap-6
  
    return (
    <div  className="flex items-center justify-center min-h-screen bg-purple-800">
    <Card size="sm" className=" mx-auto w-full max-w-sm max-h-500 p-6">
      <CardHeader className='"space-y-2 text-center"'>
        <CardTitle className='text-5xl flex justify-center'>React QUIZ </CardTitle>
        <CardDescription className='flex justify-center text-purple-950 p-3'>
          Ready for a Small Quiz?
         
        
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center mt-2">
        <p className="flex justify-center">
          Hey! Let’s see what you know—5 React questions ahead.
          



        </p>
      </CardContent>
      <CardFooter className="mt-4">
        <Button variant="outline" size="sm" onClick={()=>navigate('/questions')} className="w-full bg-purple-950 text-amber-50">
          BEGIN
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}