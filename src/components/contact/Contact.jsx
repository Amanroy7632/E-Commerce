import React,{useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser'
import {toast} from "react-hot-toast"
function Contact() {
  const inputFields = [
    {
      id: 1,
      label: {
        for: "",
        text: "Name",
        mandatory: true,
      },
      input: {
        id:"name",
        name:"user_name",
        type: "text",
        placeholder: "Enter Name",
      },
    },
    {
      id: 2,
      label: {
        for: "",
        text: "Email",
        mandatory: true,
      },
      input: {
        id:"email",
        name:"user_email",
        type: "email",
        placeholder: "Enter Email",
      },
    },
    {
      id: 3,
      label: {
        for: "",
        text: "Phone Number",
        mandatory: true,
      },
      input: {
        id:"phone",
        name:"phone",
        type: "text",
        placeholder: "Enter phone number",
      },
    },
    {
      id: 4,
      label: {
        for: "",
        text: "Message",
        mandatory: true,
      },
      input: {
        id:"message",
        name:"message",
        type: "text",
        placeholder: "Enter subbject",
      },
    },
  ];
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone:'',
    message: '',
  });
  const form = useRef();
 
  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm('service_hkvbkra', 'template_ua0hwpn', form.current, {
        publicKey: '20qu55NKpDz2aMPlK',
      })
      .then(
        () => {
          // alert("Message Sent Successfully !");
          toast.success("Message Sent Successfully")
        },
        (error) => {
          console.log("Something Went wrong !!");
        },
      );
  }
  const handleInput=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  function isValidInput(formData){
    // const alphanumericRegex = /^[a-zA -Z0-9]+$/;
    const alphanumericRegex = /^[a-zA-Z\s-]+$/;
    if(formData.user_name.length<=0){
      toast.error("Invalid name it must be alphabetic ");
      return false;
    }else if(alphanumericRegex.test(formData.user_name) && formData.user_email.includes("@") && formData.phone.length===10){
      return true;
    }
    return false;

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(formData);
    // const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if(isValidInput(formData)){
       
      sendEmail();
      document.querySelector(".feedback-form").reset()
    }else{
      toast.error("Invalid Information")
    }
    setFormData({
      user_name: '',
      user_email: '',
      phone:'',
      message: '',
    })
  }
  return (  
    <div className=" dark:bg-black dark:text-white">
      <div className="flex justify-center max-md:h-[25vh] max-sm:h-[17vh] dark:bg-black text-white w-full bg-opacity-60" style={{backgroundImage:`url(https://media.istockphoto.com/id/1213738982/photo/male-college-professor-gestures-during-lecture.jpg?s=612x612&w=0&k=20&c=vPvCqzyq3VUzjCaU-PoMaxC1ncK386Q78Cdp7bUj2Mw=)`,backgroundSize:"cover",backgroundPosition:"center",backgroundClip:"content-box",backgroundRepeat:"no-repeat" }}>
        <div className=" flex w-4/5 items-center h-[50vh] max-md:h-full max-md:w-full  dark:text-white">
          <h1 className=" text-5xl px-10 " style={{fontWeight:"bolder"}} >Get In Touch</h1>
          <p></p>
        </div>
      </div>
      <div className="form lg:w-4/5 lg:h-[75vh] max-sm:w-full flex m-auto md:w-full dark:bg-black dark:text-white">
        <div className="form lg:w-[60%] max-md:w-full  h-full bg-slate-300">
          <div className="form-values px-10 py-12 max-sm:py-6 dark:bg-[#181a1b] dark:text-white">
            <div className="flex justify-center items-center">
              <h1 className=" py-5 max-sm:py-2 text-4xl">Send us a Message</h1>
            </div>
            <form  onSubmit={handleSubmit} ref={form} className='feedback-form' >
              <div className="grid gap-8 md:grid-cols-2 grid-cols-1 mb-8 max-sm:mb-0 max-sm:gap-0">
                {inputFields.map((field) => {
                  return (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label htmlFor={field.label.for}>
                        {field.label.text}{" "}
                        {field.label.mandatory ? (
                          <span className="text-red-500">*</span>
                        ) : (
                          ""
                        )}
                      </label>
                      <input
                        type={field.input.type}
                        placeholder={field.input.placeholder}
                        id={field.input.id}
                        value={formData.email}
                        name={field.input.name}
                        onChange={handleInput}
                        className="flex border dark:border-gray-400 rounded-md py-3 px-5 dark:text-white dark:bg-transparent outline-none"
                      />
                    </div>
                  );
                })}
              </div>
              {/* <div className="flex flex-col gap-2">
                <label htmlFor="">
                  Message <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="flex border rounded-md py-3 px-5 w-full dark:text-white dark:bg-transparent"
                  placeholder="Drop a message .."
                />
              </div> */}
              <div className="flex justify-center">
                {/* <label htmlFor="">Message<span className="text-red-500">*</span></label> */}
                <button className="justify-center whitespace-nowrap font-medium dark:bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border px-6 h-12 py-1 flex items-center gap-3 xl:text-xl text-lg lg:h-[4rem] hover:bg-brand rounded-[0.4rem] lg:mt-4 hover:bg-[#333f90]">
                  Submit ↗️
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" flex flex-col justify-center max-md:hidden  sm:items-start items-center gap-4 bg-[#333f90] px-5 py-8 text-[#fff] lg:w-[40%] md:w-[40%]">
          <p className=" text-2xl">Contact Information</p>
          <div className="grid h-[440px] place-content-center w-2/3 place-self-center gap-4">
            <h3 className=" text-center text-3xl">📧</h3>
            <h3> abc@dev.com</h3>
          </div>
          <div className="flex items-center gap-5 text-xl md:text-3xl">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only ">Facebook page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only ">Discord community</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only ">Twitter page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only ">GitHub account</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only ">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact
