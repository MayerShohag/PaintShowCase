import { Link } from "react-router";

const Services = () => {
     const featuredArtist = [
          {
               name: "Leonardo da Vinci",
               role: "Genius of Wine",
               picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58B3Bd7-_gCJrHNoMjoCNyv2prc-9_qxfxGSWLT4DRtIH07RpVyfvkKIod1vbS9gYP5ONJMH9DmVjpQdnO7-4EVZUuUA-8iDiGC0ivXo&s=10",
          },
          {
               name: "Pablo Picasso",
               role: "Spanish painter and sculptor",
               picture: "https://gms-n15.s3.us-west-1.amazonaws.com/pablo_picasso_1728330890_a759fdc6895afb5e5051.png",
          },
          {
               name: "Johannes Vermeer",
               role: "Dutch painter",
               picture: "https://www.mauritshuis.nl/media/rgxggmkv/vermeer-meisje-met-de-parel-mh670-mauritshuis-den-haag.jpg?rxy=0.47243107769423559,0.44178550792733645&width=1200&height=0&quality=70&v=1d893b6016a3c20",
          },
     ];
     const platform = [
          {
               title: "Trusted Artists",
               desc: "All artists are verified to ensure authentic, original works for collectors.",
          },
          {
               title: "Secure Transactions",
               desc: "Buy and sell with confidence through encrypted payments and guaranteed delivery.",
          },
          {
               title: "Global Marketplace",
               desc: "Connect with artists and collectors from all around the world, without barriers.",
          },
     ];
     const platformWorks = [
          {
               step: "Discover",
               desc: "Browse curated artworks from talented artists worldwide.",
          },
          {
               step: "Purchase",
               desc: "Securely buy your favorite pieces directly from the platform.",
          },
          {
               step: "Collect",
               desc: "Receive your artwork and build your personal collection.",
          },
     ];
     const exhibition = [
          { year: "2022", event: "Virtual Art Fair" },
          {
               year: "2023",
               event: "Modern Art Showcase",
          },
          {
               year: "2023",
               event: "Collector's Week Online",
          },
          {
               year: "2024",
               event: "Gallery Pop-up Event",
          },
     ];
     return (
          <div className="min-h-screen bg-[#0e1217] text-[#A8B3CF] max-w-[1014px] mx-auto border border-gray-700 border-t-0 font-sans p-4 lg:p-8">
               <header className="max-w-6xl mx-auto lg:py-16 py-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-300 leading-tight">
                         Services from our Paintings Marketplace
                    </h1>
                    <p className="mt-4 lg:text-xl px-4 max-w-3xl mx-auto">
                         Discover, buy, and sell original artworks from talented
                         artists worldwide. Experience art in a way that
                         connects creativity with collectors.
                    </p>
               </header>

               <main className="max-w-6xl mx-auto space-y-24">
                    <section className="lg:p-10 p-5 md:p-16 rounded-xl border border-gray-800 shadow-xl bg-black/30 flex flex-col md:flex-row items-center gap-12">
                         <div className="md:w-1/2">
                              <h2 className="text-3xl font-bold text-gray-300 mb-4">
                                   Our Mission
                              </h2>
                              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                   We aim to make high-quality paintings
                                   accessible to collectors everywhere while
                                   providing artists a trusted platform to
                                   showcase and sell their work.
                              </p>
                              <p className="text-gray-400 text-lg italic">
                                   “Connecting creators with admirers, one
                                   painting at a time.”
                              </p>
                         </div>
                         <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                              <img
                                   src="https://artincontext.org/wp-content/uploads/2024/02/Girl-Before-a-Mirror-by-Pablo-Picasso-Color.jpg"
                                   alt="Marketplace Artwork"
                                   className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
                              />
                         </div>
                    </section>

                    <section>
                         <h2 className="md:text-4xl text-3xl font-extrabold text-center text-gray-300  mb-12">
                              Why Our Platform
                         </h2>
                         <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
                              {platform.map((item, idx) => (
                                   <div
                                        key={idx}
                                        className="bg-black/30 shadow-xl p-6 rounded-xl border border-gray-800 hover:shadow-xl text-center transition"
                                   >
                                        <h3 className="text-2xl font-semibold text-gray-400 mb-3">
                                             {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-lg">
                                             {item.desc}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </section>

                    <section>
                         <h2 className="md:text-4xl text-3xl font-extrabold text-gray-300 text-center mb-12">
                              Featured Artists
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                              {featuredArtist.map((artist, idx) => (
                                   <div
                                        key={idx}
                                        className="bg-black/30 rounded-xl border border-gray-800 shadow-lg overflow-hidden"
                                   >
                                        <img
                                             src={artist.picture}
                                             alt={artist.name}
                                             className="w-full h-80 object-cover"
                                        />
                                        <div className="p-6 text-center">
                                             <h3 className="text-xl font-semibold text-gray-300">
                                                  {artist.name}
                                             </h3>
                                             <p className="text-gray-400 text-lg">
                                                  {artist.role}
                                             </p>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </section>

                    <section className="bg-black/30 p-10 md:p-16 rounded-xl border border-gray-800 shadow-lg">
                         <h2 className="md:text-4xl text-3xl font-extrabold text-center text-gray-300 mb-10">
                              How It Works
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                              {platformWorks.map((item, idx) => (
                                   <div
                                        key={idx}
                                        className="bg-black/20 rounded-xl p-6 border border-gray-800 shadow hover:shadow-xl transition"
                                   >
                                        <h3 className="text-xl text-gray-300 font-semibold mb-3">
                                             {item.step}
                                        </h3>
                                        <p className="text-gray-400 text-lg">
                                             {item.desc}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </section>

                    <section>
                         <h2 className="md:text-4xl text-3xl font-extrabold text-gray-300 text-center mb-10">
                              Exhibitions & Events
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {exhibition.map((item, idx) => (
                                   <div
                                        key={idx}
                                        className="bg-black/30 p-6 rounded-xl border border-gray-800 shadow-md hover:shadow-xl transition"
                                   >
                                        <h3 className="text-xl font-semibold text-gray-300">
                                             {item.year}
                                        </h3>
                                        <p className="text-gray-400 text-lg">
                                             {item.event}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </section>

                    <section className="bg-black/30 p-10 rounded-xl border border-gray-800 shadow-lg">
                         <h2 className="md:text-4xl text-3xl font-extrabold text-white text-center mb-10">
                              What Collectors Say
                         </h2>
                         <div className="space-y-6 max-w-3xl mx-auto text-center">
                              {[
                                   "“Buying from this platform was seamless and inspiring!”",
                                   "“I found artwork that perfectly matches my home’s style.”",
                                   "“The quality and authenticity are outstanding.”",
                              ].map((quote, idx) => (
                                   <p
                                        key={idx}
                                        className="text-gray-300 italic text-lg"
                                   >
                                        {quote}
                                   </p>
                              ))}
                         </div>
                    </section>

                    <section className="bg-black/30 p-12 rounded-xl shadow-2xl text-center text-gray-300">
                         <h2 className="md:text-4xl text-3xl font-bold mb-6">
                              Start Your Collection Today
                         </h2>
                         <p className="text-lg mb-6 text-gray-400 max-w-2xl mx-auto">
                              Explore curated paintings, discover new artists,
                              and build your personal collection.
                         </p>
                         <div className="flex md:flex-row flex-col justify-center gap-4">
                              <Link
                                   to="/"
                                   className="bg-black hover:bg-gray-900 text-cyan-300 cursor-pointer px-8 py-3 rounded-full font-semibold transition"
                              >
                                   Browse Gallery
                              </Link>
                              <Link
                                   to="/profile"
                                   className="border border-gray-700 text-gray-400 hover:bg-gray-900 px-8 py-3 rounded-full font-semibold transition"
                              >
                                   Join as an Artist
                              </Link>
                         </div>
                    </section>

                    <section className="bg-black/30 p-10 rounded-xl border border-gray-800 shadow-lg">
                         <h2 className="md:text-4xl text-3xl font-bold text-gray-300 text-center mb-6">
                              Safe & Secure
                         </h2>
                         <p className="text-gray-400 text-center max-w-3xl text-lg mx-auto">
                              All transactions are fully encrypted and insured.
                              Your payments, purchases, and deliveries are safe
                              with us.
                         </p>
                    </section>

                    <section className="text-center py-10">
                         <p className="text-gray-400 mb-4">
                              Ready to explore original artworks?
                         </p>
                         <Link
                              to="/"
                              className="bg-gray-800 hover:bg-black/30 cursor-pointer text-gray-300 px-8 py-3 rounded-full text-xl font-semibold transition"
                         >
                              Start Browsing
                         </Link>
                    </section>
               </main>

               <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    &copy; Copyright 2025 PaintShowCase. All rights reserved.
               </footer>
          </div>
     );
};

export default Services;
