import { Link } from "react-router";

const NotificationAside = () => {
     return (
          <>
               <div>
                    <h1 className="text-3xl font-bold p-3 border-b border-gray-700">
                         Notifications
                    </h1>
                    <div className="p-3">
                         <p className="text-xl">Today</p>
                         <Link to="/notifications">
                              <div>
                                    <img src="/public/vite.svg" alt="" />
                              </div>
                              <div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint consequatur rem, distinctio id velit suscipit alias quos voluptates voluptate quae. Similique voluptas dolores, provident corporis officiis sunt. Ratione, earum nihil?</p>
                              </div>
                         </Link>
                    </div>
               </div>
          </>
     );
};

export default NotificationAside;
