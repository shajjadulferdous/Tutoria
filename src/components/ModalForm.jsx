"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";


export function ModalForm({tutor}) {
   const router = useRouter();
   const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 
  const id = session?.user?.id;
  const today = new Date();
  const dbDate = new Date(tutor.sessionStartDate);
  if (dbDate < today) {
       toast.error("This session is expired");
  }
  const handleSubmit = async(formData)=>{
       
       const booking = Object.fromEntries(formData.entries());
       booking.userId = id;
       booking.status = 'active';
       booking.tutorId = tutor?._id;
        const { data, error } = await authClient.token();
        if (error){
            toast.error('Token Invalid Please Login Again');
            return;
        }
        const {token} = data;
       const res = await fetch(`http://localhost:8080/my-session`,
        {
          method:'POST',
          headers:{
             'Content-type':'application/json',
              "Authorization": `Bearer ${token}`
          },
          body:JSON.stringify(booking)
        }
       )
       if(!res.ok){
           console.log('Something went wrong when confim booking');
           return;
       }
       router.push('/my-session');
  }
  return (
    <Modal>
      <Button isDisabled={tutor?.totalSlot <= 0 || dbDate <today} className={'bg-[#35858E] w-full'} >{tutor?.totalSlot > 0 ?'Book Now' : 'No slot avaiable now'}</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Confirm Booking Assignment</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                  Fill out your contact details below to finalize your session.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={handleSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Student Name</Label>
                    <Input placeholder="Enter your name" required />
                  </TextField>
                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>Student Email</Label>
                    <Input value={session?.user?.email} required />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel" variant="secondary">
                    <Label>Phone</Label>
                    <Input placeholder="e.g., +8801XXXXXXXXX" required />
                  </TextField>
                   <TextField className="w-full" name="tutorname" value={tutor.name}  type="text" variant="secondary">
                    <Label>Selected Mentor</Label>
                    <Input placeholder="Enter your name" required />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button slot={'close'} type="submit" className={'bg-[#35858E] w-full'} >Confirm Assignment</Button>
                 </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}