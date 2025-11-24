import React from "react";

const blogData = [
     {
          id: 1,
          title: "The Magic of Abstract Colors",
          author: "Jane Doe",
          date: "Nov 15, 2025",
          excerpt: "Exploring how abstract colors can evoke emotions and tell a story beyond shapes.",
          image: "https://s.turbifycdn.com/aah/yhst-75377436552253/abstract-ocean-wave-12-x-12-original-fluid-acrylic-painting-on-gallery-wrap-canvas-20.gif",
     },
     {
          id: 2,
          title: "Textures in Modern Art",
          author: "John Smith",
          date: "Nov 12, 2025",
          excerpt: "How textures in paintings can make a piece feel alive and dynamic.",
          image: "https://novacolorpaint.com/cdn/shop/articles/Textured_canvas_art_in_multiple_colors.jpg?v=1657874747",
     },
     {
          id: 3,
          title: "From Inspiration to Canvas",
          author: "Art Lover",
          date: "Nov 10, 2025",
          excerpt: "A step-by-step look at how ideas transform into finished artworks.",
          image: "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
     },
];
const videos = [
     {
          id: 1,
          title: "Sunset Brush Strokes",
          author: "Jane Doe",
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbnail:
               "https://t4.ftcdn.net/jpg/15/31/42/87/360_F_1531428798_1AT21h2KhzRZWUXv8DsgotzjT7yDqAiP.jpg",
     },
     {
          id: 2,
          title: "Abstract Color Play",
          author: "John Smith",
          videoUrl: "https://www.w3schools.com/html/movie.mp4",
          thumbnail:
               "https://img.freepik.com/premium-photo/sunset-landscape-watercolor-painting-background_510791-251.jpg?semt=ais_hybrid&w=740&q=80",
     },
     {
          id: 3,
          title: "Watercolor Techniques",
          author: "Art Lover",
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbnail:
               "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/48531/280938/1580979349267_Heron_painting_sunset__34949.1687415015.jpg?c=2",
     },
     {
          id: 4,
          title: "Palette Knife Magic",
          author: "CuratorBot",
          videoUrl: "https://www.w3schools.com/html/movie.mp4",
          thumbnail:
               "https://www.artistsandillustrators.co.uk/wp-content/uploads/2024/03/F1A17B82-25E1-4FDE-A844-8C7EC341FA66_1_201_a.jpeg",
     },
];

const Inspirations = () => {
     return (
          <section className="max-w-[1014px] min-h-screen mx-auto lg:pt-16 pb-8 px-4 space-y-16 lg:border border-gray-700 lg:border-t-0 p-4">
               <div className="text-center flex flex-col gap-5 pt-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-300 leading-tight">
                         Inspirations & Blog
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto px-4 lg:text-lg">
                         Discover stories, inspirations, and tips from our
                         artists and the world of painting.
                    </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-4">
                    {blogData.map((post) => (
                         <div
                              key={post.id}
                              className="bg-black/30 rounded-xl overflow-hidden border border-gray-800 shadow-md hover:shadow-xl transition"
                         >
                              <img
                                   src={post.image}
                                   alt={post.title}
                                   className="w-full h-48 object-cover"
                              />
                              <div className="p-6 space-y-3">
                                   <h3 className="text-xl font-bold text-gray-300">
                                        {post.title}
                                   </h3>
                                   <p className="text-gray-400 text-sm">
                                        By {post.author} · {post.date}
                                   </p>
                                   <p className="text-gray-400 text-sm">
                                        {post.excerpt}
                                   </p>
                                   <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-gray-300 cursor-pointer px-4 py-2 rounded-full font-semibold transition">
                                        View More &rarr;
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>

               <section className="max-w-6xl mx-auto py-16 px-4 space-y-12">
                    <div className="text-center">
                         <h2 className="text-4xl font-extrabold text-gray-300 mb-2">
                              Painting Inspirations
                         </h2>
                         <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                              Short painting videos to inspire your next
                              masterpiece.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {videos.map((video) => (
                              <div
                                   key={video.id}
                                   className="bg-black/30 rounded-xl overflow-hidden border border-gray-800 shadow-md hover:shadow-xl transition"
                              >
                                   <video
                                        src={video.videoUrl}
                                        poster={video.thumbnail}
                                        controls
                                        className="w-full h-64 object-cover rounded-t-xl"
                                   ></video>
                                   <div className="p-4 space-y-2">
                                        <h3 className="text-lg font-bold text-gray-300">
                                             {video.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg">
                                             By {video.author}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className="text-center mt-16">
                         <h3 className="text-4xl font-bold text-gray-300 mb-4">
                              Want More Inspiration?
                         </h3>
                         <p className="text-gray-400 mb-6">
                              Subscribe to our newsletter and never miss an
                              update.
                         </p>
                         <div className="flex justify-center gap-3 flex-wrap">
                              <input
                                   type="email"
                                   placeholder="Your email"
                                   className="p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                              />
                              <button className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-[1.05]">
                                   Subscribe
                              </button>
                         </div>
                    </div>
               </section>
               <footer className="max-w-6xl mx-auto pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    &copy; Copyright 2025 PaintShowCase. All rights reserved.
               </footer>
          </section>
     );
};

export default Inspirations;
