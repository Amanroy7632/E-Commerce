import React, { useState,useRef,useEffect } from "react";


// function CheckOutStepper({ configinfo = [] }) 
function CheckOutStepper() {
  const configinfo = [
    {  id:1,
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {  id:2,
      name: "Shipping Information",
      Component: () => <div>Enter Your shipping address.</div>,
    },
    { id:3,
      name: "Payment Information",
      Component: () => <div>Provide your contact details.</div>,
    },
    { id:4,
      name: "Delivered",
      Component: () => <div>Enter Your shipping address.</div>,
    },
  ];
    const [currentPosition,setCurrentPosition] = useState(1)
    const [isComplete,setComplete] =useState(false);
    const [margins,setMarins] = useState({
        marginLeft: 0,
        marginRight: 0
    })
    const stepRef=useRef([]);
    useEffect(()=>{
        console.log(stepRef.current[configinfo.length-1].offsetWidth);
        setMarins({
            marginLeft:stepRef.current[0].offsetWidth/1.1,
            marginRight:stepRef.current[configinfo.length-1].offsetWidth
        })
    },[stepRef.current])
    const clickHandler=(e)=>{
        e.preventDefault();
        setCurrentPosition(currentPosition=>{
            if(currentPosition===configinfo.length){
                setComplete(!isComplete);
                return currentPosition;
            }
           
            return currentPosition+1;
            
        })
    }
    function calculateProgress(){
       return ((currentPosition-1)/(configinfo.length-1 ))*100
    }
  if (!configinfo.length) {
    return <></>;
  }
  const ActiveComponent=configinfo[currentPosition-1]?.Component;
  return (
    <>
    <div className="stepper relative flex justify-between items-center mb-3">
      {configinfo.map((step, index) => {
        return (
          <div key={step.id} className={`step flex flex-col items-center`}>
            <div
              className={`step-number w-10 h-10 border flex justify-center  items-center z-10 text-2xl 
               ${(currentPosition>index+1 || isComplete)? "complete bg-green-500 text-white ":currentPosition===index+1?" bg-blue-700 text-white":" bg-gray-300 text-black"}`}
              style={{
                borderRadius: "50%",
                marginBottom: "5px",
                // backgroundColor: "#ccc",
              }}
              ref={element=>(stepRef.current[index]=element)}
            >
              {currentPosition>index+1 || isComplete?<span>&#10003;</span>  : index + 1}
            </div>
            <div className="step-name" style={{ fontSize: "14px" }}>
              {step.name}
            </div>
          </div>
        );
      })}
      <div className="progress-bar absolute top-5   left-0  h-1 bg-slate-400 " style={{
        width:`calc(100%-${margins.marginLeft+margins.marginRight}%)`,
    marginLeft:margins.marginLeft,marginRight:margins.marginRight}}>
        <div className="progress " style={{width:`${calculateProgress()}%`}}></div>
      </div>
    </div>
    <ActiveComponent/>
    {!isComplete && (<button className=" m-10 border p-3" 
    onClick={clickHandler}
    > {currentPosition===configinfo.length?"Finish":"Next"}</button>)}
    </>
  );
}

export default CheckOutStepper;
