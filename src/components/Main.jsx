import React from "react";
import illdesk from "../images/illustration-editor-desktop.svg";
import illmob from "../images/illustration-editor-mobile.svg";
import illphone from "../images/illustration-phones.svg";
import illlapdesk from "../images/illustration-laptop-desktop.svg";
import illlapmob from "../images/illustration-laptop-mobile.svg";
import logo from "../images/logo.svg";

function Main() {
  return (
    <main className="mt-[100px]">
      <p className="text-center font-semibold text-Verydarkblue mb-4  text-3xl md:text-3xl">
        Designed for the future
      </p>

      <article className="flex flex-col-reverse text-Verydarkblue md:flex-row w-screen">
        <section className="w-full md:w-[50%]">
          <div className="md:mt-40 md:ml-[120px]">
            <p className="hidden md:flex justify-center font-semibold text-2xl my-4">
              Introducing an extensible editor
            </p>
            <p className="md:hidden flex justify-center font-semibold text-2xl my-4">
              Introducing an <br /> extensible editor
            </p>
            <p className="text-md mx-8 ">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>

            <p className="md:hidden flex justify-center font-semibold text-2xl my-4">
              Robust content <br /> management
            </p>
            <p className="hidden md:flex justify-center font-semibold text-2xl my-4">
              {" "}
              Robust content management
            </p>
            <p className="text-md mx-8 ">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </section>
        <section className="w-full md:w-[50%] ">
          <div className="hidden md:flex">
            <img src={illdesk} alt="" className="ml-[200px]" />
          </div>
          <div className="md:hidden ml-[40px]">
            <img src={illmob} alt="" />
          </div>
        </section>
      </article>
      <article>
        <img src={illphone} alt="" className="-mb-[60%] md:hidden" />
        <div className="my-20  bg-[url('../src/images/bg-pattern-circles.svg')] flex  md:h-[300px] bg-no-repeat bg-red-800  bg-cover md:bg-fit rounded-bl-3xl  rounded-tr-3xl  bg-Verydarkblue">
          <img
            src={illphone}
            alt=""
            className="hidden md:flex -mt-[100px]   md:h-[500px] md:mx-4"
          />
          <section className=" flex  md:h-[300px] text-center pt-40 pb-20 text-White ">
            <div className="md:pl-[10%] ">
              <p className="font-semibold text-2xl my-4 md:-mt-[100px]">
                {" "}
                State of the Art Infrastructure
              </p>
              <p className="text-md text-Grayishblue mx-10 md:w-[500px] md:px-4 md:text-start">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </section>
        </div>
      </article>
      <article className="flex flex-col md:flex-row w-full my-4">
        <section className="md:w-[50%]">
          <div className="hidden md:flex  md:-ml-[280px]">
            <img src={illlapdesk} alt="" />
          </div>
          <div className="md:hidden flex">
            <img src={illlapmob} alt="" />
          </div>
        </section>
        <section className="md:w-[50%] md:mt-40 text-Verydarkdesaturatedblue">
          <p className="flex justify-center  font-semibold text-2xl my-4">
            {" "}
            Free, open, simple
          </p>
          <p className="text-sm font-medium mx-[100px]">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>

          <p className="flex justify-center  font-semibold text-2xl my-4">
            Powerful tooling
          </p>
          <p className="text-sm font-medium mx-[100px]">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </section>
      </article>
      <footer className="bg-Verydarkblackblue rounded-tr-3xl w-full text-center pb-10">
        <div className="md:flex flex-row justify-evenly md:pt-8 text-White">
          <section className="ml-[40%] py-4 md:ml-0 md:py-0">
            <img src={logo} alt="/" />
          </section>
          <section>
            <p>Product</p>
            <div className="my-4 text-Grayishblue">
              <p className="cursor-pointer my-1">Overview </p>
              <p className="cursor-pointer my-1">Pricing</p>
              <p className="cursor-pointer my-1"> Marketplace</p>
              <p className="cursor-pointer my-1">Features</p>
              <p className="cursor-pointer my-1">Integrations</p>
            </div>
          </section>
          <section>
            <p> Company </p>
            <div className="my-4  text-Grayishblue">
              <p className="cursor-pointer my-1">About</p>
              <p className="cursor-pointer my-1"> Team </p>
              <p className="cursor-pointer my-1"> Blog</p>
              <p className="cursor-pointer my-1">Careers</p>
            </div>
          </section>
          <section>
            <p> Connect </p>
            <div className="my-4  text-Grayishblue">
              <p className="cursor-pointer my-1">Contact</p>
              <p className="cursor-pointer my-1">Newsletter </p>
              <p className="cursor-pointer my-1"> LinkedIn</p>
            </div>
          </section>
        </div>
      </footer>
    </main>
  );
}

export default Main;
