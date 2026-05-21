'use client'
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import { FiEdit } from 'react-icons/fi';

const CancelAction = ({BookingId , revalidedPath}) => {
    const handleSubmit = async()=>{        
         const res =  await fetch(`http://localhost:8080/my-session/${BookingId}`,
            {
                method:'PATCH',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({status:'canceled'})
            }   
         )
         if(!res.ok){
               toast.error('something went wrong');
               return;  
         }
         revalidedPath();
    }
    return (
        <div>
            <AlertDialog>
            <Button className={'bg-[#35858E]'} >Cancel</Button>
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
                    <Button slot="close" onClick={handleSubmit} className={'bg-[#35858E]'} >
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