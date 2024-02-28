import { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLoginSidebar } from '../utils/toggleSlice'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import toast, { Toaster } from 'react-hot-toast'
import {RecaptchaVerifier} from "firebase/auth"
import {auth} from "../config/firebase.js"

const LoginSidebar = () => {
  const [Otp, setOtp] = useState("")
  const [Phone, setPhone] = useState("")
  const [ShowOtp, setShowOtp] = useState(false)

  const dispatch = useDispatch()
  const isLoginSidebarOpen = useSelector(state => state.toggle.isLoginSidebarOpen);

  const handleCloseSidebar = () => {
    dispatch(toggleLoginSidebar())
    document.body.classList.remove("overflow-hidden")
  }

  function onCaptchaVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("Captcha Resolved")
        onSignInSubmit();
      }
    });
  }

  function onSignInSubmit(){
    onCaptchaVerify()

  }

  function onOTPVerify(){}

  return (
    <>
      <Toaster toastOptions={{ className: "font-ProximaNovaSemiBold", position: "top-center", duration: 1500 }} />

      <div className={`login-sidebar fixed top-0 right-0 h-full overflow-y-scroll bg-white transition-all duration-500 z-20 px-10 py-10 flex flex-col w-[500px] ${isLoginSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className='text-3xl mb-5' onClick={handleCloseSidebar}>
          <IoIosCloseCircleOutline />
        </button>
        <div className="relative left-0">
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-color-1 text-3xl font-ProximaNovaMed'>Login</h2>
              <p className='font-ProximaNovaThin mt-1'>or <span className='text-color-2 font-ProximaNovaMed'>create an account</span></p>
            </div>
            <div>
              <img className='h-24' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r" alt="img" />
            </div>
          </div>

          <div className='mt-7'>
            {
              ShowOtp ?
                <>
                  <PhoneInput country={"in"} value={Phone} onChange={setPhone} placeholder='Phone number' disabled />
                  <input type='tel' name='otp' className='otp-field border border-1 w-full py-4 mt-2 px-3 font-ProximaNovaMed' placeholder='One time password' onChange={setOtp} />
                  <button onClick={onOTPVerify} type='button' className='w-full bg-color-2 py-4 uppercase text-base text-white font-ProximaNovaSemiBold mt-4 cursor-pointer'>Verify</button>
                </>
                :
                <>
                  <PhoneInput country={"in"} value={Phone} onChange={setPhone} placeholder='Phone number' />
                  <button onClick={onSignInSubmit} type='button' className='w-full bg-color-2 py-4 uppercase text-base text-white font-ProximaNovaSemiBold mt-4 cursor-pointer'>Login</button>
                </>
            }
          </div>

          <div>
            <p className='text-[#686b78] mt-2 font-ProximaNovaMed text-sm pr-5'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
          </div>

        </div>

      </div>

      <div id="recaptcha-container"></div>

      <div className={`login-sidebar-overlay ${isLoginSidebarOpen ? "fixed" : "hidden"} z-10 top-0 left-0 right-0 bottom-0 bg-color-1 opacity-[0.7] overflow-hidden`}></div>

    </>
  )
}

export default LoginSidebar