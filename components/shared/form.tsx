import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Forma = () => {
  return (
        <form className='w-full'>
            <div className='flex justify-center gap-10 items-center'>
              <div className='w-full p-5 '>
                <Label>
                  First Name
                </Label>
                <Input type='text' placeholder='name' className=' w-full my-2 border-t-0 border-x-0  outline-0' />
             
                <Label>
                  Last Name
                </Label>
                          <Input type='text' placeholder='Doe' className=' w-full my-2 border-t-0 border-x-0  outline-0' />

              </div>
              <div className='w-full p-4'>
                <Label>
                  Email
                </Label>
                          <Input type='email' placeholder='nurjon@gmail.com' className=' w-full my-2 border-t-0 border-x-0  outline-0' />
                <Label>
                  Phone Number
                </Label>
                          <Input type='text' placeholder='+998933365906' className=' w-full my-2 border-t-0 border-x-0  outline-0' />

              </div>
              
            </div>
            <div>
              
            </div>
        </form> 
  )
}

export default Forma