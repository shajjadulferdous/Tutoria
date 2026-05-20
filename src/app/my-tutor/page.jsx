import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import React from 'react';

const MyTutorPage = async() => {
    const session = await auth.api.getSession({
      headers: await headers()
    })
    const user = session?.user;
    
    return (
        <div>
            
        </div>
    );
};

export default MyTutorPage;