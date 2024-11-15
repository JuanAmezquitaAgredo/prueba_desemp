'use client'
import Loading from "@/ui/atoms/loading";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push('/login')
  return (
    <Loading/>
  );
}
