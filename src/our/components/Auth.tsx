"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import axios from "axios";
import Identify from "./Identify";
import Profile from "./Profile";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(true);

  async function handleAuth() {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/device`
    );
    return response.data?.data;
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await handleAuth();
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Skeleton className="w-10 h-10 rounded-lg" />;
  }

  // return <Profile />;
  return <Identify />;
};

export default Auth;
