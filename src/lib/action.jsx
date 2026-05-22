export const getTutors = async (limit = 0) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?limit=${limit}`,
    {
      cache: 'no-store'
    }
  );
  return await res.json();
};

export const getDetailsTutor = async (id , token)=>{
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`,{
      headers:{
      "Authorization": `Bearer ${token}`
    }
   });
   if (!res.ok) return null;
   const ans = await res.json();
   return ans;
}
export const getAddMyTutor = async(id, token)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors/${id}`,{
           headers:{
            "Authorization": `Bearer ${token}`
          } 
    });
    if (!res.ok) return null;
    const ans = await res.json();
    return ans;
}
