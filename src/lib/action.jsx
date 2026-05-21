export const getTutors = async (limit = 0) => {
  const res = await fetch(`http://localhost:8080/tutors?limit=${limit}`,);
  return await res.json();
};

export const getDetailsTutor = async (id , token)=>{
   const res = await fetch(`http://localhost:8080/tutors/${id}`,{
      headers:{
      "Authorization": `Bearer ${token}`
    }
   });
   if (!res.ok) return null;
   const ans = await res.json();
   return ans;
}
export const getAddMyTutor = async(id, token)=>{
    const res = await fetch(`http://localhost:8080/my-tutors/${id}`,{
           headers:{
            "Authorization": `Bearer ${token}`
          } 
    });
    if (!res.ok) return null;
    const ans = await res.json();
    return ans;
}
