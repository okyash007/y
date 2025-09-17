import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useAppStore } from "@/lib/store";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const Identify = () => {
  const { device, setDevice } = useAppStore();
  const searchParams = useSearchParams();
  const isIdentifyModal = searchParams.get("identify_modal") === "true";
  const [isDialogOpen, setIsDialogOpen] = useState(isIdentifyModal ? true : false);

  async function handleIdentify() {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/identify`, formData);
    if (response.data?.success) {
      return response.data?.data;
    }
    return null;
  }

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (name.trim().length > 50) {
      return "Name must be less than 50 characters";
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      return "Name can only contain letters and spaces";
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Please enter a valid email address";
    }
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/(?=.*\d)/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      return "Password must contain at least one special character (@$!%*?&)";
    }
    return undefined;
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Handle field blur for real-time validation
  const handleFieldBlur = (field: keyof FormData) => {
    let error: string | undefined;
    
    switch (field) {
      case 'name':
        error = validateName(formData.name);
        break;
      case 'email':
        error = validateEmail(formData.email);
        break;
      case 'password':
        error = validatePassword(formData.password);
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Call the identify API
      const data = await handleIdentify();
      
      if (data) {
        setDevice(data);
        
        // Handle successful submission
        setIsDialogOpen(false);
        
        // Reset form
        setFormData({ name: "", email: "", password: "" });
        setErrors({});
      } else {
        // Handle API failure
        console.error('Identity verification failed');
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error('Submission error:', error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg" className="w-10 h-10">
          <HiMiniQuestionMarkCircle className="!size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] p-0">
        <div className="bg-gradient-to-br from-background to-secondary/20 p-8">
          <form onSubmit={handleSubmit}>
            <DialogHeader className="space-y-4 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <HiMiniQuestionMarkCircle className="size-8 text-primary" />
              </div>
              <div className="space-y-2">
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Identify Yourself
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground/80 max-w-sm leading-relaxed">
                  Create your account to access all features and personalize your experience.
                </DialogDescription>
              </div>
            </DialogHeader>
            <div className="space-y-6 py-8">
              <div className="space-y-3">
                <Label htmlFor="name-1" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Full Name
                </Label>
                <Input
                  id="name-1"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={() => handleFieldBlur('name')}
                  className={`h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-200 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="email-1" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Email Address
                </Label>
                <Input
                  id="email-1"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => handleFieldBlur('email')}
                  className={`h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-200 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="password-1" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Password
                </Label>
                <Input
                  id="password-1"
                  type="password"
                  name="password"
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  onBlur={() => handleFieldBlur('password')}
                  className={`h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-200 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.password && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.password}
                  </p>
                )}
                <div className="text-xs text-muted-foreground/70 space-y-1">
                  <p>Password must contain:</p>
                  <ul className="ml-4 space-y-0.5">
                    <li className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>
                      At least 8 characters
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>
                      Upper & lowercase letters
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>
                      Numbers & special characters
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-3 pt-6 border-t border-border/20">
              <DialogClose asChild>
                <Button 
                  variant="outline" 
                  disabled={isSubmitting}
                  className="h-11 border-border/50 hover:border-border hover:bg-secondary/50 transition-all duration-200"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="h-11 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 flex-1 sm:flex-initial"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Identifying...
                  </div>
                ) : (
                  "Identify"
                )}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Identify;
