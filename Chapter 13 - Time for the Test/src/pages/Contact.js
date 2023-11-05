import { PEOPLE_IMG } from "../utils/constants";

const Contact = () => {
    return (
        <div className='container mx-auto mt-[100px]'>
            <h2 className="text-customblack-1 font-GrotBlack text-5xl text-center mb-10">Contact us Here</h2>
            <div className='form-container flex justify-center items-center gap-16'>
                <div>
                    <img src={PEOPLE_IMG} alt="img" className="h-[400px]" />
                </div>

                <form className="flex items-center justify-center flex-col gap-5">
                    <div>
                        <input type="text" placeholder="Name" className="w-64 h-14 px-6 text-customblack-1 rounded-lg border border-black" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="w-64 h-14 px-6 text-customblack-1 rounded-lg border border-black" />
                    </div>
                    <div>
                        <input type="submit" className="bg-black text-white w-28 h-12 rounded-lg" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact