export const getTutors = async (limit = 0) => {
  const res = await fetch(`http://localhost:8080/tutors?limit=${limit}`);
  return await res.json();
};

export const getDetailsTutor = async (id)=>{
   const res = await fetch(`http://localhost:8080/tutors/${id}`);
   const ans = await res.json();
   return ans;
}
export const getAddMyTutor = async(id)=>{
    const res = await fetch(`http://localhost:8080/my-tutors/${id}`);
    const ans = await res.json();
    return ans;
}
