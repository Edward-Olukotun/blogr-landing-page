import React, { useState } from "react";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";
import DownArrow from "../images/icon-arrow-light.svg";
import DownUp from "../images/icon-arrow-dark.svg";
import logo from "../images/logo.svg";
import Bgintro from "../images/bg-pattern-intro-desktop.svg";

function Nav() {
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [connect, setConnect] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleDrop = () => {
    setMobile(!mobile);
    setProduct(false);
    setCompany(false);
    setConnect(false);
  };
  const handleProduct = () => {
    setProduct(!product);
    setCompany(false);
    setConnect(false);
  };
  const handleCompany = () => {
    setCompany(!company);
    setProduct(false);
    setConnect(false);
  };
  const handleConnect = () => {
    setConnect(!connect);
    setProduct(false);
    setCompany(false);
  };

  return (
    <>
      <div className="w-full h-fit -mb-[300px] bg-Verylightred rounded-bl-3xl">
        <img src={Bgintro} alt="" className="h-[300px] w-full object-cover" />
      </div>
      <div className="bg-bg-pattern bg-cover w-full bg-no-repeat h-fit  ">
        {/* mobile */}
        <div className="md:hidden flex justify-between  pt-5  ">
          <div>
            <img src={logo} alt="" />
          </div>
          <div onClick={handleDrop} className="cursor-pointer">
            {mobile ? (
              <img src={Close} alt="/" />
            ) : (
              <img src={Hamburger} alt="/" />
            )}
          </div>
          <ul
            className={
              mobile
                ? "absolute text-black  w-[300px] bg-White shadow-2xl px-4 mt-10 h-[350px]  flex flex-col ml-[120px] "
                : "hidden"
            }
          >
            <li className="flex justify-center my-3">
              <p className="flex flex-row mx-4 my-2 font-bold">Product</p>
              <div onClick={handleProduct} className="cursor-pointer">
                {product ? (
                  <img src={DownUp} alt="/" className=" h-2 mt-4 mx-2" />
                ) : (
                  <img src={DownUp} alt="/" className=" h-2 mt-4 mx-2" />
                )}
              </div>
              <div className={product ? "mb-40 h-fit flex flex-col " : "mb-0"}>
                <ul
                  className={
                    product
                      ? "absolute -ml-[160px] text-center w-[200px] bg-Grayishblue rounded-md mt-[40px]"
                      : "hidden"
                  }
                >
                  <li className="cursor-pointer hover:font-bold">Overview </li>
                  <li className="cursor-pointer hover:font-bold"> Pricing</li>
                  <li className="cursor-pointer hover:font-bold">
                    Marketplace
                  </li>
                  <li className="cursor-pointer hover:font-bold">Features</li>
                  <li className="cursor-pointer hover:font-bold">
                    Integrations
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex justify-center my-3">
              <p className="flex flex-row mx-4 my-2 font-bold">Company</p>
              <div onClick={handleCompany} className="cursor-pointer">
                {company ? (
                  <img src={DownUp} alt="/" className=" h-2 mt-4 mx-2" />
                ) : (
                  <img src={DownUp} alt="/" className=" h-2 mt-4 mx-2" />
                )}
              </div>
              <div className={company ? "mb-32 h-fit flex flex-col " : "mb-0"}>
                <ul
                  className={
                    company
                      ? "absolute  -ml-[160px]  text-center w-[200px] bg-Grayishblue rounded-md mt-[40px] "
                      : "hidden"
                  }
                >
                  <li className="cursor-pointer  hover:font-bold">About </li>
                  <li className="cursor-pointer  hover:font-bold"> Team</li>
                  <li className="cursor-pointer  hover:font-bold">Blog</li>
                  <li className="cursor-pointer  hover:font-bold">Careers</li>
                </ul>
              </div>
            </li>
            <li className="flex justify-center my-3">
              <p className="flex flex-row mx-4 my-2 font-bold">Connect</p>
              <div onClick={handleConnect}>
                {connect ? (
                  <img src={DownUp} alt="/" className=" h-2 mt-4 mx-2" />
                ) : (
                  <img src={DownUp} alt="/" className=" h-2 mt-4 mx-2" />
                )}
              </div>
              <div className={connect ? "mb-32 h-fit flex flex-col " : "mb-0"}>
                <ul
                  className={
                    connect
                      ? "absolute -ml-[160px] text-center w-[200px] bg-Grayishblue rounded-md mt-[40px] "
                      : "hidden"
                  }
                >
                  <li className="cursor-pointer  hover:font-bold"> Contact </li>
                  <li className="cursor-pointer  hover:font-bold">
                    {" "}
                    Newsletter
                  </li>
                  <li className="cursor-pointer  hover:font-bold">LinkedIn</li>
                </ul>
              </div>
            </li>

            <section>
              <div className="h-[2px] w-full bg-Grayishblue"></div>
              <div className="flex flex-col text-center my-4">
                <buton className="mx-4 cursor-pointer  font-medium hover:text-White hover:bg-Lightred1 hover:rounded-2xl hover:py-2 w-[100px] ml-[80px]">
                  Login
                </buton>
                <buton className="mx-4 cursor-pointer   font-medium hover:text-White hover:bg-Lightred1 hover:rounded-2xl hover:py-2 w-[100px] ml-[80px]">
                  Sign Up
                </buton>
              </div>
            </section>
          </ul>
        </div>

        {/* desktop */}
        <div className="hidden md:flex justify-between  pt-5 w-full mx-10">
          <div className="flex">
            <div>
              <img src={logo} alt="" />
            </div>
            <p className="flex flex-row mx-4 hover:underline cursor-pointer text-White font-semibold">
              Product
            </p>
            <div onClick={handleProduct} className="cursor-pointer">
              {product ? (
                <img src={DownArrow} alt="/" className=" h-2 mt-2 mx-2" />
              ) : (
                <img src={DownArrow} alt="/" className=" h-2 mt-2 mx-2" />
              )}
            </div>
            <ul
              className={
                product
                  ? "absolute font-normal w-[125px] ml-[100px]  bg-White shadow-2xl  mt-10 rounded-md  flex flex-col text-center py-4"
                  : "hidden"
              }
            >
              <li className="cursor-pointer hover:font-bold">Overview </li>
              <li className="cursor-pointer hover:font-bold"> Pricing</li>
              <li className="cursor-pointer hover:font-bold">Marketplace</li>
              <li className="cursor-pointer hover:font-bold">Features</li>
              <li className="cursor-pointer hover:font-bold">Integrations</li>
            </ul>
            <p className="flex flex-row mx-4 hover:underline cursor-pointer text-White font-semibold">
              Company
            </p>
            <div onClick={handleCompany} className="cursor-pointer">
              {company ? (
                <img src={DownArrow} alt="/" className=" h-2 mt-2 mx-2" />
              ) : (
                <img src={DownArrow} alt="/" className=" h-2 mt-2 mx-2" />
              )}
            </div>
            <ul
              className={
                company
                  ? "absolute font-normal  w-[125px] ml-[230px] bg-White shadow-2xl px-4 mt-10 rounded-md  flex flex-col text-center py-4"
                  : "hidden"
              }
            >
              <li className="cursor-pointer hover:font-bold">About </li>
              <li className="cursor-pointer hover:font-bold"> Team</li>
              <li className="cursor-pointer hover:font-bold">Blog</li>
              <li className="cursor-pointer hover:font-bold">Careers</li>
            </ul>
            <p className="flex flex-row mx-4 hover:underline cursor-pointer text-White font-semibold">
              Connect
            </p>
            <div onClick={handleConnect} className="cursor-pointer">
              {connect ? (
                <img src={DownArrow} alt="/" className=" h-2 mt-2 mx-2" />
              ) : (
                <img
                  src={DownArrow}
                  alt="/"
                  className="
               h-2 mt-2 mx-2"
                />
              )}
            </div>
            <ul
              className={
                connect
                  ? "absolute font-normal  w-[125px] ml-[365px] bg-White shadow-2xl px-4 mt-10 rounded-md  flex flex-col text-center  py-4 "
                  : "hidden"
              }
            >
              <li className="cursor-pointer hover:font-bold"> Contact </li>
              <li className="cursor-pointer hover:font-bold"> Newsletter</li>
              <li className="cursor-pointer hover:font-bold">LinkedIn</li>
            </ul>
          </div>
          <div className="mr-20">
            <buton className="mx-4 cursor-pointer  text-White font-medium hover:bg-White/20 hover:rounded-2xl hover:py-2 hover:px-3">
              Login
            </buton>
            <buton className="mx-4 cursor-pointer  text-White font-medium hover:bg-White/20 hover:rounded-2xl hover:py-2 hover:px-3">
              Sign Up
            </buton>
          </div>
        </div>
        <div className="flex flex-col text-center my-4">
          <p className="hidden md:flex justify-center text-White font-semibold text-5xl pb-5">
            A modern publishing platform
          </p>
          <p className="md:hidden  text-White font-semibold mx-5 text-3xl pb-5">
            A modern <br />
            publishing platform
          </p>
          <p className="hidden md:flex justify-center text-White font-semibold text-xl ">
            Grow your audience and build your online brand
          </p>
          <p className="md:hidden text-White font-semibold text-md mx-5 ">
            Grow your audience and build your <br /> online brand
          </p>
          <div className="mt-5">
            <buton className="mx-4 cursor-pointer border-solid hover:border-none border-White border-2 p-2 rounded-3xl text-White font-medium hover:bg-White hover:text-Lightred hover:rounded-2xl hover:py-2 hover:px-3">
              Start for Free
            </buton>
            <buton className="mx-4 cursor-pointer border-solid hover:border-none border-White border-2 p-2 rounded-3xl text-White font-medium hover:bg-White hover:text-Lightred hover:rounded-2xl hover:py-2 hover:px-3">
              Learn More
            </buton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
