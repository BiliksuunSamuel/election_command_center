import React from "react";
import Router from "./router/Router";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Loader } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearResponse } from "./features/slice/responseReducer";
export default function App() {
  const dispatch = useAppDispatch();
  const { loading, message, error } = useAppSelector(
    (state) => state.responseReducer
  );

  function generateToast() {
    Boolean(message) &&
      toast(message, {
        theme: "light",
        position: "top-right",
        onClose: () => {
          dispatch(clearResponse());
        },
        type: "success",
      });
    Boolean(error) &&
      toast(error, {
        theme: "light",
        position: "top-right",
        onClose: () => {
          dispatch(clearResponse());
        },
        type: "error",
      });

    return <></>;
  }
  return (
    <React.Fragment>
      <Loader open={loading} />
      {Boolean(error || message) && generateToast()}
      <ToastContainer
        position="top-right"
        draggable={true}
        draggableDirection="x"
        theme="light"
        pauseOnHover
        closeOnClick
        autoClose={5000}
      />
      <Router />
    </React.Fragment>
  );
}
