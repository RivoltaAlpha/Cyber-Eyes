import { NavLink } from "react-router-dom";
const SoftwareEngPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
          
          {/* Hero Banner */}
          <div className="relative h-96 overflow-hidden">
            <img 
              src="./src/assets/software.jpg" 
              alt="Software Engineering Banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl font-bold mb-4">Software Engineering Writeups</h1>
            </div>
          </div>
    
          {/* Main content */}
          <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* Article grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="bg-blue-900 rounded-lg overflow-hidden">
                  <img 
                      src="./src/assets/software.png" 
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
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">News & Events</h2>
              <div className="grid grid-cols-1 grid-rows-3 gap-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="bg-indigo-700 rounded-lg overflow-hidden">
                    <img 
                      src="./src/assets/software.png" 
                      alt="Software Engineering Image" 
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">News Title</h3>
                      <p className="text-gray-300 text-sm">Brief news description...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      );
    };

export default SoftwareEngPage;
