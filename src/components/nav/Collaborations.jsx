const collaborationsData = {
     artists: [
          {
               name: "Jane Smith",
               role: "Guest Artist",
               logo: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
               name: "Alex Turner",
               role: "Guest Artist",
               logo: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?cs=srgb&dl=pexels-olly-3785079.jpg&fm=jpg",
          },
     ],
     galleries: [
          {
               name: "ArtHouse Gallery",
               role: "Exhibition Partner",
               logo: "https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
          },
          {
               name: "Gallery Hub",
               role: "Promotion Partner",
               logo: "https://i1.pickpik.com/photos/516/857/262/smile-profile-face-male-preview.jpg",
          },
     ],
     curators: [
          {
               name: "Creative Collective",
               role: "Curator Collaboration",
               logo: "https://thumbs.dreamstime.com/b/portrait-cute-guy-glasses-white-t-shirt-white-background-who-smiles-gullible-right-camera-close-184005135.jpg",
          },
          {
               name: "Modern Art Curators",
               role: "Curator Collaboration",
               logo: "https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/66fcde00cf54d71747a52bac_upwork-profile-photo-tips.jpg",
          },
     ],
     events: [
          {
               name: "Summer Art Expo 2024",
               role: "Event Partner",
               logo: "https://a.storyblok.com/f/191576/1176x882/f95162c213/profile_picture_hero_before.webp",
          },
          {
               name: "Contemporary Art Fair",
               role: "Event Partner",
               logo: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg",
          },
     ],
     brands: [
          {
               name: "Premium Paint Co.",
               role: "Material Partner",
               logo: "https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg",
          },
          {
               name: "Canvas World",
               role: "Material Partner",
               logo: "https://img.freepik.com/free-photo/cheerful-bearded-man-busines-clothes-showing-thumb-up-looking-camera-gray_171337-11351.jpg?semt=ais_hybrid&w=740&q=80",
          },
     ],
};

const CollaborationCard = ({ item }) => (
     <div className="bg-black/30 p-4 rounded-xl shadow-lg border border-gray-800 flex flex-col items-center text-center hover:shadow-xl transition">
          <img
               src={item.logo}
               alt={item.name}
               className="w-20 h-20 rounded-full mb-3 object-cover border-2 border-gray-700"
          />
          <h3 className="text-white text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-400 text-sm">{item.role}</p>
     </div>
);

const Collaborations = () => {
     return (
          <section className="max-w-[1014px] mx-auto lg:border border-gray-700 lg:border-t-0 font-sans p-4 sm:p-8 px-4 lg:space-y-10">
               <div className="flex flex-col gap-5 lg:pt-17 py-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-300">
                         Our Collaborations
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl lg:text-lg px-4 mx-auto">
                         We collaborate with talented artists, galleries,
                         curators, events, and trusted brands to create
                         exceptional painting experiences.
                    </p>
               </div>

               <section>
                    <h3 className="text-2xl lg:text-4xl text-gray-300 font-bold mb-4 lg:mb-6">
                         Guest Artists
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                         {collaborationsData.artists.map((item, idx) => (
                              <CollaborationCard key={idx} item={item} />
                         ))}
                    </div>
               </section>

               <section>
                    <h3 className="text-2xl lg:text-4xl text-gray-300 font-bold my-4 lg:mb-6">
                         Galleries
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                         {collaborationsData.galleries.map((item, idx) => (
                              <CollaborationCard key={idx} item={item} />
                         ))}
                    </div>
               </section>

               <section>
                    <h3 className="text-2xl lg:text-4xl text-gray-300 font-bold my-4 lg:mb-6">
                         Curators
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                         {collaborationsData.curators.map((item, idx) => (
                              <CollaborationCard key={idx} item={item} />
                         ))}
                    </div>
               </section>

               <section>
                    <h3 className="text-2xl lg:text-4xl text-gray-300 font-bold my-4 lg:mb-6">
                         Events
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                         {collaborationsData.events.map((item, idx) => (
                              <CollaborationCard key={idx} item={item} />
                         ))}
                    </div>
               </section>

               <section>
                    <h3 className="text-2xl lg:text-4xl text-gray-300 font-bold my-4 lg:mb-6">
                         Material & Brand Partners
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                         {collaborationsData.brands.map((item, idx) => (
                              <CollaborationCard key={idx} item={item} />
                         ))}
                    </div>
               </section>

               <section className="text-center">
                    <h3 className="text-2xl lg:text-4xl text-gray-300 font-bold mt-10 pb-2 lg:mb-6">
                         Want to Collaborate With Us?
                    </h3>
                    <p className="text-gray-400 text-lg px-4 lg:text-xl mb-10">
                         If you are an artist, gallery, or brand interested in
                         collaboration, we would love to hear from you.
                    </p>

                    <section className="max-w-4xl mx-auto py-5 px-4">
                         <form className="bg-black/30 p-8 rounded-xl shadow-lg grid  lg:grid-cols-2 lg:gap-4  border border-gray-800 space-y-3 lg:space-y-6">
                              <div className="lg:col-span-1 col-span-2">
                                   <label
                                        className="block text-gray-400 mb-2"
                                        htmlFor="name"
                                   >
                                        Name
                                   </label>
                                   <input
                                        type="text"
                                        id="name"
                                        placeholder="Your name"
                                        className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                   />
                              </div>

                              <div className="lg:col-span-1 col-span-2">
                                   <label
                                        className="block text-gray-400 mb-2"
                                        htmlFor="email"
                                   >
                                        Email
                                   </label>
                                   <input
                                        type="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                   />
                              </div>

                              <div className="col-span-2">
                                   <label
                                        className="block text-gray-400 mb-2"
                                        htmlFor="subject"
                                   >
                                        Subject
                                   </label>
                                   <input
                                        type="text"
                                        id="subject"
                                        placeholder="Subject"
                                        className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                   />
                              </div>

                              <div className="col-span-2">
                                   <label
                                        className="block text-gray-400 mb-2"
                                        htmlFor="message"
                                   >
                                        Message
                                   </label>
                                   <textarea
                                        id="message"
                                        placeholder="Write your message..."
                                        rows={5}
                                        className="w-full p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                   ></textarea>
                              </div>

                              <div className="col-span-2">
                                   <button
                                        type="submit"
                                        className="bg-gray-700 hover:bg-gray-600 cursor-pointer text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-[1.05]"
                                   >
                                        Send Message
                                   </button>
                              </div>
                         </form>
                    </section>
               </section>
               <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    &copy; Copyright 2025 PaintShowCase. All rights reserved.
               </footer>
          </section>
     );
};

export default Collaborations;
