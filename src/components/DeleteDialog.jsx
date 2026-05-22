'use client'
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin5Line } from 'react-icons/ri';

const DeleteDialog = ({id , name , handleRevalidate}) => {

    const handleSubmit = async()=>{
        const { data, error } = await authClient.token();
        if (error){
            toast.error('Token Invalid Please Login Again');
            return;
        }
        const {token} = data;

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors/${id}`,
            {
                method:'DELETE',
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        const res =await result.json();
        if(!res.deletedCount){
             toast.error('something went wrong when delete');
             return;
        }
        handleRevalidate();
    }
    return (
        <div>
            <AlertDialog>
            <Button variant='ghost'><RiDeleteBin5Line className='w-8 h-8 text-red-500' /></Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                    <AlertDialog.Icon status="danger" />
                    <AlertDialog.Heading>Delete session permanently?</AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                    <p>
                        This will permanently delete <strong>{name} Session</strong> and all of its
                        data. This action cannot be undone.
                    </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary">
                        Cancel
                    </Button>
                    <Button slot="close" onClick={handleSubmit} variant="danger">
                        Delete
                    </Button>
                    </AlertDialog.Footer>
                </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteDialog;