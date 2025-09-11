import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const VerifyEmail = ({ isDialogOpen, setIsDialogOpen }: { isDialogOpen: boolean, setIsDialogOpen: (isDialogOpen: boolean) => void }) => {

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Verify Email</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyEmail;
