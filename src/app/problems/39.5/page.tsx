"use client";

import Header from "../../../components/header";
import "../../../styles/subproblems.css";
import Footer from "../../../components/footer";

const Page = () => {
  return (
    <>
      <Header/>
      <div className="main">
        <a className="submit" href="https://beta-jdev.vercel.app/problems/39" target="_blank" rel="noopener noreferrer">
          Solve Problem
        </a>
        <div className="pdffile">
          <embed src="/39.5.pdf" width="800px" height="600px" type="application/pdf"></embed>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
