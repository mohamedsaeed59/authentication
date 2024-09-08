import HomePage from "@/components/homePage/homePage";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));    
    if (!token || !token.includes('one-hand1234')) {
      router.push('/app/login');
    }
  }, [router]);

  return (
   <>
     <HomePage />
   </>
  );
}
