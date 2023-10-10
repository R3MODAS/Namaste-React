import { useEffect } from "react";

const UserFunc = () => {



    useEffect(() => {
        // const timer = setInterval(()=> {
        //   console.log("SetInterval after 1s");
        // }, 1000);
        console.log("UseEffect called");

        return(() => {
          // clearInterval(timer);
          console.log("UseEffect returns");
        })
    }, [])

    console.log("Component Rendered");

        return (
            <>
              <h1>This is User Functional Component</h1>
            </>
          );
}

export default UserFunc;