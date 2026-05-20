'use client'
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { Button } from '@heroui/react';
import { Icon } from '@iconify-icon/react';
const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors },} = useForm();
    const handleRegister= async (e)=>{
         const { data, error } = await authClient.signUp.email({
                name: e.name, 
                email: e.email, 
                password: e.password, 
                image: e.image,
                callbackURL: "/",
            });
        if (data){
             console.log(data);
             toast.success(`${data.user.name} is Registered Successfully`)
             await authClient.signOut();
             redirect('/login');
        }
        if (error){
            toast.error(error.message);
        }
    }
    const handleSignInGoogle = async()=>{
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    const handleErrors = (errors)=>{
        if (errors.email){
             toast.error("Email Must Required");
        }
        else if (errors.name){
             toast.warning("Name Must Required");
        }
        else if (errors.image){
             toast.error("Photo Must Required");
        }
        else {
              toast.error('Password Must Be given');
        }
    }
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
             <div>
                <Image src={'/assests/tutoria.png'} alt="logo" width={180} height={180} className='grayscale-100'></Image>
             </div>
            <h1 className='font-semibold text-xl text-gray-600'>Sign up for Tutoria</h1>
            <div>
                <form onSubmit={handleSubmit(handleRegister , handleErrors)}>
                <fieldset className="fieldset rounded-box w-85 sm:w-100  p-4">       

                <label className="label text-gray-600 font-semibold text-[16px]">Email</label>
                <input type="email" {...register('email', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-[#35858E] hover:border-2" placeholder="Email" />
              
                <label className="label text-gray-600 font-semibold text-[16px]">Name</label>
                <input type="text" {...register('name', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-[#35858E] hover:border-2" placeholder="Your Name" />
                 
                <label className="label text-gray-600 font-semibold text-[16px]">Photo</label>
                <input type="text" {...register('image', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-[#35858E] hover:border-2" placeholder="URL" />

                <label className="label text-gray-600 font-semibold text-[16px]">Password</label>
                <input type="password" {...register('password', { required: true })} className="input outline-none w-85 sm:w-100  hover:border-[#35858E] hover:border-2" placeholder="Password" />

                <Button type='submit' className="w-full bg-[#35858E] text-white mt-4">Create Account</Button>
                </fieldset>
                </form>
                <p className='flex justify-center text-slate-500'>-------------------- OR --------------------</p>
                <div className='flex justify-center mt-5'>
                    
                    <Button onClick={handleSignInGoogle} className="w-full" variant="tertiary">
                        <Icon icon="devicon:google" />
                          Sign Up with Google
                        </Button>
                </div>
                <p className='text-center mt-4'>Already Have an Account ? <Link href={'/login'} className='text-[#35858E]'>Go Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;