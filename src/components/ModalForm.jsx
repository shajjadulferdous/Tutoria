"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function ModalForm({tutor}) {
  return (
    <Modal>
      <Button className={'bg-[#35858E] w-full'} >Book Now</Button>
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
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Student Name</Label>
                    <Input placeholder="Enter your name" required />
                  </TextField>
                  <TextField className="w-full" name="email" type="email" variant="secondary">
                    <Label>Student Email</Label>
                    <Input value={'sha@gmail.com'} required />
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
                    <Button slot={'close'} className={'bg-[#35858E] w-full'} >Confirm Assignment</Button>
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