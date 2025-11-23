const Exhibitions = () => {
     const exhibitions = [
          {
               status: "This Week",
               items: [
                    {
                         title: "Vibrant Sunset Seascape Oil Painting",
                         artist: "Maya Chen",
                         img: "https://montcarta.com/cdn/shop/files/GOLDEN_HORIZON_Vibrant_Sunset_Seascape_Oil_Painting_6.jpg?v=1741337456&width=1200",
                         date: "Nov 22 - Nov 28",
                    },
                    {
                         title: "Seascape 61 by Hilly Coufreur",
                         artist: "Liam Ortiz",
                         img: "https://montcarta.com/cdn/shop/files/GOLDEN_HORIZON_Vibrant_Sunset_Seascape_Oil_Painting_5.jpg?v=1741337456&width=1200",
                         date: "Nov 23 - Nov 29",
                    },
                    {
                         title: "Abstract Horizon Painting",
                         artist: "Liam Ortiz",
                         img: "https://media.istockphoto.com/id/964375828/vector/horizon-paint.jpg?s=612x612&w=0&k=20&c=4A29XmEYLt8jZon8uMnCbRIcJvg-pKOTaysA5pxqtTg=",
                         date: "Nov 24 - Nov 30",
                    },
                    {
                         title: "Turbulent ocean waves",
                         artist: "Liam Ortiz",
                         img: "https://images.pexels.com/photos/30000404/pexels-photo-30000404/free-photo-of-abstract-ocean-inspired-swirl-art-in-teal-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                         date: "Nov 24 - Nov 31",
                    },
               ],
          },
          {
               status: "Upcoming",
               items: [
                    {
                         title: "Abstract Waves",
                         artist: "Alex Rivera",
                         img: "https://helloart.com/cdn/shop/products/1_1699990399_30193.jpg?v=1700067461",
                         date: "Dec 5 - Dec 12",
                    },
                    {
                         title: "Sunset Dreams",
                         artist: "Nina Patel",
                         img: "https://www.tobyray.co.uk/cdn/shop/products/treyarnonsunset_af1f6629-127e-4c93-93f8-59e56dbf4541_530x@2x.jpg?v=1626508660",
                         date: "Dec 10 - Dec 16",
                    },
                    {
                         title: "Original Textured Abstract Impasto",
                         artist: "Nina Patel",
                         img: "https://montcarta.com/cdn/shop/files/Textured_Abstract_Impasto_Oil_Painting_5.jpg?v=1742217184&width=1200",
                         date: "Dec 10 - Dec 16",
                    },
               ],
          },
          {
               status: "Past Exhibitions",
               items: [
                    {
                         title: "Modern Forms",
                         artist: "Olivia Park",
                         img: "https://indianartideas.in/articleimages/1544530226what-is-contemporary-art.JPG",
                         date: "Oct 1 - Oct 15",
                    },
                    {
                         title: "Color Symphony",
                         artist: "Ethan Lee",
                         img: "https://images.fineartamerica.com/images-medium-large-5/color-symphony-lutz-baar.jpg",
                         date: "Sep 12 - Sep 20",
                    },
                    {
                         title: "Sense Canvas Cosmo Color Symphony",
                         artist: "Ethan Lee",
                         img: "https://m.media-amazon.com/images/I/6118TPqUGdL._AC_UF894,1000_QL80_.jpg",
                         date: "Sep 12 - Sep 20",
                    },
               ],
          },
     ];

     return (
          <div className="min-h-screen max-w-[1014px] mx-auto lg:pt-10 lg:border border-gray-700 lg:border-t-0 bg-[#0e1217] text-[#A8B3CF] font-sans p-2 lg:p-8">
               <header className="max-w-6xl mx-auto lg:py-16 py-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-300 leading-tight">
                         Painting Exhibitions
                    </h1>
                    <p className="mt-4 lg:text-xl text-gray-400 max-w-3xl px-4 mx-auto">
                         Explore current, upcoming, and past painting
                         exhibitions curated for art enthusiasts and collectors.
                    </p>
               </header>
               <main className="max-w-6xl mx-auto space-y-20 px-3">
                    {exhibitions.map((section, idx) => (
                         <section key={idx}>
                              <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-300 mb-4 lg:mb-8">
                                   {section.status}
                              </h2>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                   {section.items.map((ex, i) => (
                                        <div
                                             key={i}
                                             className="bg-black/30 rounded-xl border border-gray-800 shadow-lg overflow-hidden hover:shadow-xl transition"
                                        >
                                             <img
                                                  src={ex.img}
                                                  alt={ex.title}
                                                  className="w-full h-48 object-cover hover:scale-[1.03] transition-transform duration-500"
                                             />
                                             <div className="p-6">
                                                  <h3 className="text-xl font-semibold text-gray-300">
                                                       {ex.title}
                                                  </h3>
                                                  <p className="text-gray-400">
                                                       {ex.artist}
                                                  </p>
                                                  <p className="text-gray-500 mt-1 text-sm">
                                                       {ex.date}
                                                  </p>
                                                  <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-gray-300 cursor-pointer px-4 py-2 rounded-full font-semibold transition">
                                                       View Exhibition
                                                  </button>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </section>
                    ))}
               </main>

               <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    &copy; Copyright 2025 PaintShowCase. All rights reserved.
               </footer>
          </div>
     );
};

export default Exhibitions;
