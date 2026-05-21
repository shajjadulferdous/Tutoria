import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MySessionPage = async() => {
    const session = await auth.api.getSession({
          headers: await headers()
    })
    
    return (
        <div>
            
        </div>
    );
};

export default MySessionPage;