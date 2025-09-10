"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleAuth() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/device`);
    const data = await response.json();
    return data.data;
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await handleAuth();
      console.log(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Skeleton className="w-10 h-10 rounded-lg" />;
  }

  return (
    <Button variant="secondary" size="lg" className="w-10 h-10">
      <HiMiniQuestionMarkCircle className="!size-6" />
    </Button>
  );
};

export default Auth;
