import MiniProfileComment from "../../../miniprofile/MiniProfileComment";
import CommentReact from "./CommentReact";

const CommentSection = ({ paint }) => {
     return (
          <>
               <section className="comment-section flex flex-col gap-4 mt-4">
                    <section className="border border-gray-700 hover:bg-white/5 transition-all duration-150 rounded-2xl p-4">
                         <MiniProfileComment paint={paint} />
                         <div className=" mt-3 p-2 ">
                              <p>
                                   Lorem ipsum dolor, sit amet consectetur
                                   adipisicing elit. Asperiores, porro, illo
                                   voluptatem nihil inventore adipisci tempora
                                   repudiandae aperiam facilis nisi, dolorem ad
                                   odit! Ut ex fugiat fuga nam vitae
                                   praesentium.
                              </p>
                         </div>
                         <CommentReact />
                    </section>
               </section>
          </>
     );
};

export default CommentSection;
