import { createContext, useState } from "react";

export const PostContext = createContext(null)

const PostContextProvider = ({children}) =>{
      const [postData, setPostData] = useState([])
      
      return (
            <PostContext value={{

            }}>
                  {children}
            </PostContext>
      )
}