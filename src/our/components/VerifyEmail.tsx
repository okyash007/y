import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store";
import { RiMailCheckFill, RiRefreshLine, RiCloseLine } from "react-icons/ri";

const VerifyEmail = ({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}) => {
  const [otpValue, setOtpValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const { device } = useAppStore();
  const userEmail = device?.user?.email;

  // Resend cooldown timer
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleVerify = async () => {
    if (otpValue.length !== 6) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // Handle success/error here
    console.log("Verifying OTP:", otpValue);
  };

  const handleResend = async () => {
    setIsResending(true);
    setResendCooldown(60); // 60 second cooldown
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsResending(false);
    
    console.log("Resending verification code");
  };

  const maskEmail = (email: string) => {
    if (!email) return "";
    const [username, domain] = email.split("@");
    const maskedUsername = username.charAt(0) + "*".repeat(Math.max(0, username.length - 2)) + username.slice(-1);
    return `${maskedUsername}@${domain}`;
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <RiMailCheckFill className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-semibold">
            Verify Your Email
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            We&apos;ve sent a 6-digit verification code to{" "}
            <span className="font-medium text-foreground">
              {userEmail ? maskEmail(userEmail) : "your email"}
            </span>
            . Please enter it below to verify your account.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* OTP Input */}
          <div className="flex justify-center">
            <InputOTP 
              maxLength={6} 
              value={otpValue} 
              onChange={setOtpValue}
              disabled={isLoading}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleVerify}
              disabled={otpValue.length !== 6 || isLoading}
              className="w-full h-11"
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Email"
              )}
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>Didn&apos;t receive the code?</span>
              <Button
                variant="link"
                onClick={handleResend}
                disabled={resendCooldown > 0 || isResending}
                className="h-auto p-0 text-sm font-medium"
              >
                {isResending ? (
                  <>
                    <RiRefreshLine className="w-3 h-3 animate-spin mr-1" />
                    Sending...
                  </>
                ) : resendCooldown > 0 ? (
                  `Resend in ${resendCooldown}s`
                ) : (
                  "Resend Code"
                )}
              </Button>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-xs text-muted-foreground/70 text-center space-y-1">
            <p>Check your spam folder if you don&apos;t see the email.</p>
            <p>The code will expire in 10 minutes.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyEmail;
