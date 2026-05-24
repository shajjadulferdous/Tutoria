'use client'
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const CancelAction = ({BookingId , revalidedPath , tutorId , status}) => {
    const [isPending, setIsPending] = useState(false);
    const handleSubmit = async()=>{ 
         setIsPending(true); 
         const { data, error } = await authClient.token();
         const {token} = data;
         if(error){
             toast.error('Token Invalid , Please Login again');
             return;
         }     
         const res =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-session/${BookingId}`,
            {
                method:'PATCH',
                headers:{
                    'Content-type':'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify({status:'canceled' , tutorId})
            }   
         )
         if(!res.ok){
               toast.error('something went wrong');
               setIsPending(false);
               return;  
         }
         toast.success('Session Canceled Successfully');
         setIsPending(false);
         revalidedPath();
         
    }
    return (
        <div>
            <AlertDialog>
            <Button className={'bg-[#35858E]'} isDisabled={isPending || status =='canceled'} > {isPending ? 'Canceling...' : 'Cancel'}</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                    <AlertDialog.Icon className={'bg-[#35858E] text-white'} />
                    <AlertDialog.Heading>Cancel the Session?</AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                    <p>
                        This will permanently cancel and all of its
                        data. This action cannot be undone.
                    </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary">
                        Cancel
                    </Button>
                     <Button slot={'close'}  onClick={handleSubmit} className={'bg-[#35858E]'} >
                        Done
                    </Button>
                    </AlertDialog.Footer>
                </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default CancelAction;