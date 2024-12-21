"use client";

import Header from "../../../components/header";
import "../../../styles/subproblems.css";
import Footer from "../../../components/footer";

const Page = () => {
  return (
    <>
      <Header/>
      <div className="main">
        <a className="submit" href="https://codeforces.com/group/eScIVDG1u2/contest/553124/submit?submittedProblemIndex=%22A1%22" target="_blank" rel="noopener noreferrer">
          Submit Code
        </a>
        <div className="pdffile">
          <embed src="/11.pdf" width="800px" height="600px" type="application/pdf"></embed>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
