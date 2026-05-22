'use client'
import { authClient } from '@/lib/auth-client';
import { Envelope } from '@gravity-ui/icons';
import { Button, Dropdown, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiEdit } from 'react-icons/fi';

const EditCard = ({tutor , handleRevalidate}) => {
    const [selected, setSelected] = useState(tutor?.teachingMode);
    const handleSubmit = async(formData) =>{
          const tutorDetails = Object.fromEntries(formData.entries());
          tutorDetails.teachingMode = selected?.currentKey;
          const { data, error } = await authClient.token();
          if (error){
              toast.error('Token Invalid Please Login Again');
              return;
          }
          const {token} = data;
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors/${tutor?._id}`,
           { method:'PATCH',
            headers:{
                'Content-type':'application/json',
                 "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify(tutorDetails)
           }
         )
         if (!res.ok){
             toast.error('something went wrong when deleting');
             return;
         }
         handleRevalidate();
    }
    return (
    <Modal>
      <Button variant='ghost' ><FiEdit className='w-8 h-8 text-[#35858E]' /></Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>You can Edit Your Session </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                  Edit your session details below to finalize your session.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={handleSubmit} className="flex flex-col gap-4">
    

                   <TextField className="w-full"  name='name' defaultValue={tutor.name}  type="text" variant="secondary">
                    <Label>Mentor</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                   <TextField className="w-full"  name='photo' defaultValue={tutor.photo}  type="text" variant="secondary">
                    <Label>Photo</Label>
                    <Input placeholder="Enter your photo" />
                  </TextField>

                   <TextField className="w-full"  name='institution' defaultValue={tutor.institution}  type="text" variant="secondary">
                    <Label>Institution</Label>
                    <Input placeholder="Enter your institution" />
                  </TextField>

                   <TextField className="w-full"  name='subject' defaultValue={tutor.subject}  type="text" variant="secondary">
                    <Label>Subject</Label>
                    <Input placeholder="Enter your subject" />
                  </TextField>

                  <TextField className="w-full"  name='experience' defaultValue={tutor.experience}  type="text" variant="secondary">
                    <Label>Experience</Label>
                    <Input placeholder="Enter your experience" />
                  </TextField>

                   <TextField className="w-full"  name='availableDays' defaultValue={tutor.availableDays}  type="text" variant="secondary">
                    <Label>Available Days</Label>
                    <Input placeholder="Enter your Available Days" />
                  </TextField>
                   
                   <TextField className="w-full"  name='timeSlot' defaultValue={tutor.timeSlot}  type="text" variant="secondary">
                    <Label>Time Slot</Label>
                    <Input placeholder="Enter your Time Slot" />
                  </TextField>
                  
                  <TextField className="w-full"  name='hourlyFee' defaultValue={tutor.hourlyFee}  type="text" variant="secondary">
                    <Label>Hourly Fee</Label>
                    <Input placeholder="Enter your Hourly Fee" />
                  </TextField>
                  
                  <TextField className="w-full"  name='totalSlot' defaultValue={tutor.totalSlot}  type="text" variant="secondary">
                    <Label>Total Slot</Label>
                    <Input placeholder="Enter your Total Slot" />
                  </TextField>
                  
                  <TextField className="w-full"  name='sessionStartDate' defaultValue={tutor.sessionStartDate}  type="text" variant="secondary">
                    <Label>Session Start Date</Label>
                    <Input placeholder="Enter your Session Start Date" />
                  </TextField>

                  <TextField className="w-full"  name='sessionStartDate' defaultValue={tutor.sessionStartDate}  type="text" variant="secondary">
                    <Label>Session Start Date</Label>
                       <Dropdown>
                        <Button
                        className="input outline-none w-full bg-white border border-slate-300 hover:border-[#35858E] rounded-xl px-4 flex justify-between items-center shadow-none text-black"
                        >
                        <span className="capitalize text-slate-700">
                            {Array.from(selected) || 'Select teaching mode'}
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-slate-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                            />
                        </svg>
                        </Button>
                        
                        <Dropdown.Popover className=" rounded-2xl border border-slate-200 shadow-xl">
                        <Dropdown.Menu
                            selectedKeys={selected}
                            selectionMode="single"
                            onSelectionChange={setSelected}
                        >
                            <Dropdown.Section title="Teaching Mode">
                            <Dropdown.Item
                                id="online"
                                className="py-3 rounded-lg hover:bg-[#35858E]/10"
                            >
                                Online
                            </Dropdown.Item>

                            <Dropdown.Item
                                id="offline"
                                className="py-3 rounded-lg hover:bg-[#35858E]/10"
                            >
                                Offline
                            </Dropdown.Item>

                            <Dropdown.Item
                                id="both"
                                className="py-3 rounded-lg hover:bg-[#35858E]/10"
                            >
                                Both
                            </Dropdown.Item>

                            </Dropdown.Section>
                        </Dropdown.Menu>
                        </Dropdown.Popover>
                     </Dropdown>
                  </TextField>
                  


                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button slot={'close'} type='submit' className={'bg-[#35858E] w-full'} >Save Change</Button>
                 </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default EditCard;