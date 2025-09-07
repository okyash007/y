// NextTopLoader configuration
export const topLoaderConfig = {
  // Secondary color for the progress bar (neutral gray that works in both themes)
  color: "#6b7280",
  
  // Initial position of the progress bar (0-1)
  initialPosition: 0.08,
  
  // Speed of the crawling animation
  crawlSpeed: 200,
  
  // Height of the progress bar in pixels
  height: 3,
  
  // Whether to show the crawling animation
  crawl: true,
  
  // Whether to show the spinner (disabled)
  showSpinner: false,
  
  // CSS easing function
  easing: "ease",
  
  // Speed of the progress bar animation
  speed: 200,
  
  // CSS shadow for the progress bar (subtle glow)
  shadow: "0 0 10px #6b7280,0 0 5px #6b7280",
  
  // HTML template for the progress bar (no spinner)
  template: `<div class="bar" role="bar"><div class="peg"></div></div>`,
  
  // Z-index of the progress bar (should be higher than your navbar)
  zIndex: 9999,
  
  // Whether to show the progress bar at the bottom
  showAtBottom: false,
} as const;

// Alternative theme configurations
export const topLoaderThemes = {
  blue: {
    color: "#2299DD",
    shadow: "0 0 10px #2299DD,0 0 5px #2299DD",
  },
  green: {
    color: "#22DD99",
    shadow: "0 0 10px #22DD99,0 0 5px #22DD99",
  },
  purple: {
    color: "#9922DD",
    shadow: "0 0 10px #9922DD,0 0 5px #9922DD",
  },
  orange: {
    color: "#DD9922",
    shadow: "0 0 10px #DD9922,0 0 5px #DD9922",
  },
  red: {
    color: "#DD2222",
    shadow: "0 0 10px #DD2222,0 0 5px #DD2222",
  },
} as const;
