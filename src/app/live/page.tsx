import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Live Page</h1>
        <p className="text-lg mb-4">
          This is the live page. You should have seen the TopLoader animation when navigating here!
        </p>
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
          <p className="text-sm text-muted-foreground">
            Navigate back to see the TopLoader in action again
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
