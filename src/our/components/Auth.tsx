"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import axios from "axios";
import Identify from "./Identify";
import Profile from "./Profile";
import { useAppStore } from "@/lib/store";

const Auth = () => {
  // Get whatever you need from the store
  const { device, setDevice } = useAppStore();

  // Your existing code...
  const [isLoading, setIsLoading] = useState(true);

  async function handleAuth() {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/device`
    );
    if (response.data?.success) {
      return response.data?.data;
    }
    return null;
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await handleAuth();
      setDevice(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Skeleton className="w-10 h-10 rounded-lg" />;
  }

  if(!device) {
    return <Skeleton className="w-10 h-10 rounded-lg" />;
  }

  if(device?.user) {
    return <Profile />;
  }

  return <Identify />;
};

export default Auth;
