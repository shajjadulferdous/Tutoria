'use client'
import React from 'react';
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
         <div className='flex justify-between'>
                    <div className="w-full  bg-white md:shadow-xl md:border md:border-gray-100 flex overflow-hidden min-h-[80vh]">
                        
                        <div className="hidden md:flex flex-1 bg-[#35858E] p-12 flex-col justify-between relative overflow-hidden">
        
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        
                            <div className="text-white text-3xl font-black tracking-wider z-10 select-none">
                                Tutoria.
                            </div>
                            
                            <div className="max-w-md z-10">
                                <Icon icon="fa6-solid:quote-left" className="text-white/20 text-5xl mb-4" />
                                <p className="text-2xl text-white font-medium leading-relaxed tracking-wide">
                                    Education is the most powerful weapon which you can use to change the world.
                                </p>
                                <div className="h-1 w-12 bg-white/40 mt-6 rounded" />
                            </div>
        
                            <div className="text-white/60 text-sm z-10">
                                © 2026 Tutoria Inc. All rights reserved.
                            </div>
                        </div>
                         
                            
                       <div className='flex-1 '>
                         <div className='w-11/12 pt-12  md:p-12 mx-auto'>
                        <h1 className='font-semibold text-xl text-center text-gray-600'>Welcome Back</h1>
                        <p className='text-gray-600 text-sm text-center'>Sign in to continue your learning journey.</p>
                          <div>
                <form onSubmit={handleSubmit(handleRegister , handleErrors)}>
                <fieldset className="fieldset rounded-box  p-4">       

                <label className="label text-gray-600 font-semibold text-[16px]">Email</label>
                <input type="email" {...register('email', { required: true })} className="input outline-none w-full rounded-full  hover:border-[#35858E] hover:border-2" placeholder="Email" />
              
                <label className="label text-gray-600 font-semibold text-[16px]">Name</label>
                <input type="text" {...register('name', { required: true })} className="input outline-none w-full rounded-full  hover:border-[#35858E] hover:border-2" placeholder="Your Name" />
                 
                <label className="label text-gray-600 font-semibold text-[16px]">Photo</label>
                <input type="url" {...register('image', { required: true })} 
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                 title="Must be valid URL" 
                 className="input validator outline-none w-full rounded-full hover:border-[#35858E] hover:border-2" placeholder="https://" />
                <p className="validator-hint hidden">Must be valid URL</p>

                <label className="label text-gray-600 font-semibold text-[16px]">Password</label>
                <input type="password" {...register('password', { required: true })}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  minLength="6" 
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" 
                  className="input validator outline-none rounded-full  w-full hover:border-[#35858E] hover:border-2" placeholder="Password" />
                 <p className="validator-hint hidden">
                 Must be more than 6 characters, including
                <br/>At least one number
                <br/>At least one lowercase letter
                <br/>At least one uppercase letter
                </p>

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
                       </div>
        
                        </div>
         
                </div>
    );
};

export default RegisterPage;