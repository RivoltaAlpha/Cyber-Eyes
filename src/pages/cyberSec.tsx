import { NavLink } from "react-router-dom";
const CybersecurityPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
          
          {/* Hero Banner */}
          <div className="relative h-[500px] overflow-hidden">
            <img 
              src="/images/hacking.png" 
              alt="Ethical Hacking Banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-bold mb-4">Ethical Hacking Writeups</h1>
            </div>
          </div>
    
          {/* Main content */}
          <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* Article grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-indigo-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/hacking.png" 
                    alt="Robot" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">Article Title</h2>
                    <p className="text-gray-300">Brief description of the article...</p>
                  </div>
                  <NavLink to="/articles">
                  <button type="button" className="w-[100px] py-2 rounded ml-[150px] mb-4 bg-red-500 btn btn-outline btn-primary" > Read more 
                  </button></NavLink>
                </div>
              ))}
            </div>
    
            {/* News & Events section */}
            {/*  */}
          </main>
        </div>
      );
    };

export default CybersecurityPage;
