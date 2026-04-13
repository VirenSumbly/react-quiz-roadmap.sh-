import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card1"

import { useLocation } from "react-router-dom"

export default function Result() {
        
    const location = useLocation()
    const score = location.state?.score

    return (
    <div className='flex items-center justify-center min-h-screen bg-purple-800'>
    <Card size="m" className=" max-w-sm">
      <CardHeader>
        <CardTitle>Result</CardTitle>
        <CardDescription>
          You Scored: 
        </CardDescription>
        <div className="flex items-center text-7xl justify-center py-4">{score*2}/10        </div>
      </CardHeader>
      <CardContent>
        <p>
          Quiz complete. Review your results, learn from them, and keep improving.




        </p>
      </CardContent>
    
    </Card>
    </div>
  )
}
