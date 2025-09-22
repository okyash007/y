import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Settings, Save, Eye, Bell, Shield, FileText, Globe, Clock } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Slider } from "@/components/ui/slider"

const SettingsComponent = () => {
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [sliderValue, setSliderValue] = useState([30]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="hover:bg-secondary/50 transition-colors">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="p-4 space-y-4">
          {/* Auto Save */}
          <div className="space-y-3">
             <div className="flex items-center justify-between space-x-3">
               <div className="flex items-center space-x-3">
                 <div className="p-2 bg-primary/10 rounded-md">
                   <Save className="h-4 w-4 text-primary" />
                 </div>
                 <div className="flex flex-col">
                   <Label htmlFor="auto-save" className="cursor-pointer text-sm font-medium">
                     Auto Save
                   </Label>
                   <p className="text-xs text-muted-foreground">Save changes automatically</p>
                 </div>
               </div>
               <Switch 
                 id="auto-save" 
                 checked={autoSaveEnabled}
                 onCheckedChange={setAutoSaveEnabled}
               />
             </div>
            
            {/* Auto Save Duration */}
            {/* {autoSaveEnabled && (
              <div className="space-y-2 animate-in slide-in-from-top-1 fade-in-0 duration-200">
                <div className="flex items-center justify-between">
                  <Label htmlFor="save-duration" className="text-xs text-muted-foreground">
                    Save every {sliderValue[0]} seconds
                  </Label>
                  <span className="text-xs text-muted-foreground">
                    {sliderValue[0] < 60 ? `${sliderValue[0]}s` : `${Math.floor(sliderValue[0] / 60)}m ${sliderValue[0] % 60}s`}
                  </span>
                </div>
                <Slider
                  id="save-duration"
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  min={10}
                  max={300}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10s</span>
                  <span>5m</span>
                </div>
              </div>
            )} */}
          </div>

          {/* Comments */}
          {/* <div className="flex items-center justify-between space-x-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/10 rounded-md">
                <FileText className="h-4 w-4 text-blue-500" />
              </div>
              <Label htmlFor="comments" className="cursor-pointer">
                <span className="text-sm font-medium">Enable Comments</span>
                <p className="text-xs text-muted-foreground">Allow readers to comment</p>
              </Label>
            </div>
            <Switch id="comments" />
          </div> */}

          {/* Public */}
          {/* <div className="flex items-center justify-between space-x-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-500/10 rounded-md">
                <Globe className="h-4 w-4 text-green-500" />
              </div>
              <Label htmlFor="public" className="cursor-pointer">
                <span className="text-sm font-medium">Make Public</span>
                <p className="text-xs text-muted-foreground">Visible to everyone</p>
              </Label>
            </div>
            <Switch id="public" />
          </div> */}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsComponent;
