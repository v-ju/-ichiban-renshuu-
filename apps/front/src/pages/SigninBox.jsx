const Signin = () => {
    return <>
        <div className="flex justify-around bg-pink-200 items-center h-screen">
            <div>

            </div>
            <div className="w-sm h-54 bg-amber-400 flex flex-col justify-evenly  border-0 rounded-2xl">
                <div>
                    <div className="flex justify-center items-start"> 
                    Hi there!
                    </div>
                    <div className="flex justify-center items-start"> 
                        Let's get started!
                    </div>
                </div>

                <button className="flex justify-center ">
                    <div className="flex items-center justify-center border rounded-2xl px-3">
                        <img src="/google.svg" width={20} height={20} className="m-2"/>
                        <span className="hover:cursor-pointer flex m-2">
                            Sign in with Google
                        </span>
                    </div>
                </button>
            </div>
        </div>
    </> 
}

export default Signin