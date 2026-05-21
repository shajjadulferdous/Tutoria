import { Spinner } from "@heroui/react";

export default function Loading() {
  
  return <div className="h-screen flex justify-center items-center">
      <Spinner size="xl" className="text-[#35858E]" />
  </div>
}