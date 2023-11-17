import { Component } from 'react';
import { FaGithub } from "react-icons/fa";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserInfo: {}
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/R3MODAS");
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
            } else {
                const json = await response.json();
                this.setState({ UserInfo: json })
            }
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const {UserInfo} = this.state;

        const { name, avatar_url: userImg, html_url: link, location } = UserInfo;

        return (
            <div className='bg-[url("/images/aboutbg.jpg")] bg-cover w-full pt-24'>
                <div className='container mx-auto text-center text-white flex flex-col justify-center items-center min-h-screen custom-shadow'>
                    <h2 className="font-GrotBlack text-4xl pt-5 pb-5">Purpose of Spicy Pricey 😉</h2>
                    <p className='font-GrotMed w-[800px] text-xl mx-auto'>Spicy Pricey is a place where you can get all sorts of Restaurants where you can order anything, anytime you desire 🔥. This works on Swiggy's Live Data so you will get all the features of the Food Ordering App 😁</p>

                    <h2 className="font-GrotBlack text-3xl pt-5 pb-5 drop-shadow-2xl">This website is made by {this.props.creator} 🔥</h2>

                    <div className='mt-5 flex justify-center items-center gap-5'>
                        <div>
                            <img className='w-60 rounded-full' src={userImg} alt="img" />
                        </div>
                        <div className='text-left italic'>
                            <h3 className='font-GrotBold text-2xl'>Name: {name}</h3>
                            <h3 className='font-GrotBold text-2xl'>Location: {location}</h3>
                            <h3 className='font-GrotBold text-2xl flex items-center justify-start gap-2'>Follow me on <a href={link} target='_blank'><FaGithub /></a></h3>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default User