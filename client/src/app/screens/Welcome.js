function Welcome() {
    return (
        <div className="bg-gray-100 h-screen w-full flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl text-center mx-5 max-w-lg w-full">
                <h1 className="text-3xl font-bold mb-2 ">Welcome, KS Calling</h1>
                <p className="">Talk with friends</p>
                <form>
                    <input placeholder="Your name" required type="text" className="w-full p-3 my-3 border-2 mt-5 focus:border-indigo-400 border-gray-400 outline-none rounded-lg" />
                    <button type="submit" className="rounded-lg py-3 px-7 bg-indigo-600 text-white block mx-auto">Start call</button>
                </form>
            </div>
        </div>
    )
}

export default Welcome
