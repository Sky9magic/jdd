"use client";

import Header from "../../../components/header";
import "../../../styles/subproblems.css";
import Footer from "../../../components/footer";

const Page = () => {
  return (
    <>
      <Header/>
      <div className = "main">
        <a className="submit" href="https://codeforces.com/group/eScIVDG1u2/contest/560196" target="_blank" rel="noopener noreferrer">
          <p>Submit Code</p>
        </a>
        <div className="pdffile"><embed src="/0.pdf" width="800px" height="600px" type="application/pdf"></embed></div>
      </div>
      <Footer/>
    </>
  );
};
export default Page;
