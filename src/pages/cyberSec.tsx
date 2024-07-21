const CybersecurityPage = () => {
  type WriteupItem = {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  };

  const cyberSecData: WriteupItem[] = [
    {
      title: "OSINT Dojo’s Sakura Room!",
      description: "Sakura Room is an engaging TryHackMe challenge focused on Open Source Intelligence (OSINT). Participants delve into the art of gathering publicly available information to solve intricate puzzles, enhancing their investigative skills and understanding of digital footprints in a cybersecurity context.",
      imageUrl: "https://miro.medium.com/max/399/1*KD0-pEjPKaSYxk3rusLRdw.png",
      link: "https://medium.com/@cyb3r-arson/try-hack-me-sakura-room-write-up-1ab3da748a29",
    },
    {
      title: "Packet Tracer Installation",
      description: "Cisco Packet Tracer is a powerful network simulation tool used for practicing networking concepts and preparing for Cisco certifications. Installing Packet Tracer on a Linux system involves a few steps to ensure compatibility and proper setup",
      imageUrl: "https://th.bing.com/th/id/OIP.tPwV7JOQ92secEoYZYd72QHaEP?w=750&h=430&rs=1&pid=ImgDetMain",
      link: "https://medium.com/@cyb3r-arson/navigating-the-digital-highway-%EF%B8%8F-installing-packet-tracer-on-ubuntu-and-kali-linux-99bdf153ae9e",
    },
    {
      title: "Meow lab - Hack The Box",
      description: "Meow Lab is an introductory challenge on Hack The Box designed for newcomers to penetration testing and ethical hacking. This lab provides a foundational experience, guiding participants through basic concepts and techniques to exploit vulnerabilities in a controlled environment. Perfect for those starting their journey in cybersecurity, Meow Lab offers practical insights and hands-on learning opportunities.",
      imageUrl: "https://i.ytimg.com/vi/AS08Qss0tuI/maxresdefault.jpg",
      link: "https://medium.com/@cyb3r-arson/hack-the-box-walkthrough-step-by-step-8419ee97b86e",
    },
    {
      title: "Pixellete - East Africa Intervarsity CTF ",
      description: "In the Pixellete challenge, participants are tasked with uncovering a hidden flag embedded within an image by analyzing the least significant bits (LSBs) of the pixel values.",
      imageUrl: "https://miro.medium.com/v2/resize:fit:652/1*cjt3ETxvkEhMerftj93Exw.png",
      link: "https://medium.com/@cyb3r-arson/east-africa-intervasity-ctf-semis-write-up-59fe7bdf9f79"
    },
    {
      title: "SQL Injection Vulnerability Assessment with DVWA ",
      description: "An SQL Injection is a technique that involves malicious actors inserting harmful code into an application’s SQL queries through input fields especially those lacking proper validation checks.",
      imageUrl: "https://th.bing.com/th/id/OIP.ddf_pH6Mew5lTOeisIi8gwHaDt?w=2000&h=1000&rs=1&pid=ImgDetMain",
      link: "https://geekscripts.vercel.app/posts/dvwa-sql-injection/"
    },
    {
      title: "Dual Booting Old Windows Machine",
      description: "In this post, I will explain how to dual boot an old Windows machine. I will also show you how to install the latest version of Windows 11 on your new Windows machine.",
      imageUrl: "https://www.howtogeek.com/wp-content/uploads/2014/04/dual-boot-windows-8-and-windows-7.png?trim=1,1&bg-color=000&pad=1,1",
      link: "https://geekscripts.vercel.app/posts/dual-boot/"
    }
  ]

    return (
        <div className="min-h-screen bg-gray-700 text-white">
          
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
              {cyberSecData.map((item, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                  <button type="button" className="w-[100px] py-2 rounded ml-[150px] mb-4 bg-red-500 btn btn-outline btn-primary"onClick={() => window.location.href = item.link}  > Read more 
                  </button>
                </div>
              ))}
            </div>
    

          </main>
        </div>
      );
    };

export default CybersecurityPage;
