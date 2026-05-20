'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { Button } from '@heroui/react';
import { Icon } from '@iconify-icon/react';

const LoginPage = () => {
        const { register, handleSubmit, formState: { errors },} = useForm();
        const handleLogin= async (e)=>{
            const { data, error } = await authClient.signIn.email({
                email: e.email, 
                password: e.password,
                rememberMe: true,
                callbackURL: "/",
            });
            if (data){
                 console.log(data);
                 toast.success(`${data.user.name} is Sing In Successfully`)
                 redirect('/');
            }
            if (error){
                toast.error(error.message);
            }
    }
    
    const handleError = (errors)=>{
            if (errors.email){
                  toast.error("Email Must Required");
            }
            else {
                   toast.error('Password Must Be given');
            }
        }
    const handleSignInGoogle = async()=>{
            const data = await authClient.signIn.social({
                provider: "google",
            });
     }

    return (
        <div className='h-screen flex justify-center items-center flex-col'>
             <div>
                <Image src={`/assests/tutoria.png`} alt="logo" width={180} height={180} className='grayscale-100'></Image>
             </div>
            <h1 className='font-semibold text-xl text-gray-600'>Sign in to Tutoria</h1>
            <div>
                <form onSubmit={handleSubmit(handleLogin , handleError)}>
                <fieldset className="fieldset rounded-box w-85 sm:w-100  p-4">
                <label className="label text-gray-600 font-semibold text-[16px]">Email</label>
                <input type="email" {...register('email', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-[#35858E] hover:border-2" placeholder="Email" />

                <label className="label text-gray-600 font-semibold text-[16px]">Password</label>
                <input type="password" {...register('password', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-[#35858E] hover:border-2" placeholder="Password" />

                <Button type='submit' className="w-full bg-[#35858E] text-white mt-4">Sign in</Button>
                </fieldset>
                </form>
                 <p className='flex justify-center text-slate-500'>-------------------- OR --------------------</p>

                <div className='flex justify-center mt-5'>
                      <Button onClick={handleSignInGoogle} className="w-full" variant="tertiary">
                         <Icon icon="devicon:google" />
                          Continue with Google
                      </Button>
                </div>
                <p className='text-center mt-4'>New to Tutoria ? <Link href={'/register'} className='text-blue-500'>Create an Account</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;