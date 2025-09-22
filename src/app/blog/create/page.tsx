"use server";

import Client from "./Client";

const page = () => {
  return (
    <>
      <div className="max-md:hidden">
        <Client />
      </div>
      <div className="max-md:block hidden">
        <div className="h-[calc(100vh-5rem)] flex items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-background to-muted/20">
          <div className="w-full max-w-sm">
            {/* Card Container */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Blog Editor</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The editor requires more screen space for the best experience
                </p>
                
                {/* Info Box */}
                <div className="bg-muted/50 rounded-xl p-4 mt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Use desktop or tablet for full features</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-xl font-medium hover:bg-primary/90 transition-colors mt-6">
                  Open on Desktop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
