import CancelAction from '@/components/CancelAction';
import { auth } from '@/lib/auth';
import { Button, Chip, EmptyState, Table } from '@heroui/react';
import { Icon } from '@iconify-icon/react';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import React from 'react';

const MySessionPage = async() => {
    const session = await auth.api.getSession({
          headers: await headers()
    })
    const revalidedPath = async()=>{
        'use server';
        revalidatePath('/my-session');
    }
    const {token }= await auth.api.getToken({
          headers: await headers()
    })
    const id = session?.user?.id;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-session/${id}`,
        {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }
    );
    const bookings = await res.json();

    if(!bookings.length){
         return <EmptyState className="flex h-full w-full flex-col items-center justify-center gap-4 my-20 text-center">
                <Icon className="size-6 text-muted" icon="gravity-ui:tray" />
                <span className="text-lg text-muted">No results found</span>
                <span className="text-muted">Please booked a session</span>
               </EmptyState>
    }

    return (
        <div className='w-11/12 mx-auto my-20'>
          <Table>
            <Table.ResizableContainer>
                <Table.Content aria-label="Table with resizable columns" className="min-w-[700px]">
                <Table.Header>
                    <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={160}>
                     Student Name
                    <Table.ColumnResizer />
                    </Table.Column>
                    <Table.Column defaultWidth="1fr" id="tutorname" minWidth={220}>
                     Tutor Name
                    <Table.ColumnResizer />
                    </Table.Column>
                    <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                    Status
                    <Table.ColumnResizer />
                    </Table.Column>
                    <Table.Column defaultWidth="1fr" id="email" minWidth={200}>
                    Email
                    </Table.Column>
                    <Table.Column defaultWidth="1fr" id="actions" minWidth={200}>
                     Actions
                    </Table.Column>
                </Table.Header>
                <Table.Body >
                 {
                    bookings.map((booking ,index) =>  
                    <Table.Row key={index}>
                    <Table.Cell>{booking.name}</Table.Cell>
                    <Table.Cell>{booking.tutorname}</Table.Cell>
                    <Table.Cell>
                        {
                            booking.status == 'active'?<Chip color="success" size="sm" variant="soft">
                            {booking.status}
                            </Chip> : <Chip color="danger" size="sm" variant="soft">
                                 cancelled
                            </Chip>
                        }
                    </Table.Cell>
                     <Table.Cell>{booking.email}</Table.Cell>
                     <Table.Cell>
                        <CancelAction BookingId={booking?._id} tutorId={booking?.tutorId} revalidedPath={revalidedPath}></CancelAction>
                     </Table.Cell>
                    </Table.Row>
                  )
                 }
                 </Table.Body>
                </Table.Content>
            </Table.ResizableContainer>
            </Table>
        </div>
    );
};

export default MySessionPage;