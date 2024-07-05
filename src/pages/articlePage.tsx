
const ArticlePage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
          
          {/* Hero Banner */}
          <div className="relative h-96 overflow-hidden">
            <img 
              src="./src/assets/carticle.png" 
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
            {/* Article page */}
            <div className="bg-indigo-700 rounded-lg overflow-hidden">
              <img 
                src="./src/article_img.png" 
                alt="Article Image" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Article Title</h2>
                <p className="text-gray-300 mb-4">Article description</p>
                <p className="text-gray-300">Article content</p>

              </div>
            </div>
          </main>
        </div>
      );
    };

export default ArticlePage
