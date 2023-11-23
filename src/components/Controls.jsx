import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const InputElem =useRef()

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });

    
  };
  const HandlePrivacy = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });

    
  };
  



  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload:{
        num:InputElem.current.value,
      }
    });
  InputElem.current.value=""

   
    
  };
  const handleSub = () => {
    dispatch({
      type: "SUBTRACT",
      payload:{
        num:InputElem.current.value,
      }
    });
    InputElem.current.value=""

    
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary"
        >
          +1
        </button>{" "}
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-dark"
        >
          -1
        </button>
        <button 
      onClick={HandlePrivacy} 
      type="button" 
      className="btn btn-warning">
        PrivacyToggle
      </button>
      </div>
      <div >
      <input
      ref={InputElem}
        type="text"
        placeholder="Enter a number here "
        className="input-space"
      />
      <button
        onClick={handleAdd}
        type="button"
        className="btn btn-success"
      >
        ADD
      </button>

      {" "}

      <button 
      onClick={handleSub} 
      type="button" 
      className="btn btn-info">
        SUBTRACT
      </button>
      </div>
    </>
  );
};

export default Controls;
