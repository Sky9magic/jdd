"use client";

import Header from "../../../components/header";
import "../../../styles/subproblems.css";
import Footer from "../../../components/footer";

const Page = () => {
  return (
    <>
      <Header/>
      <div className="pdffile"><embed src="/12.pdf" width="800px" height="600px" type="application/pdf"></embed></div>
      <Footer/>
    </>
  );
};
export default Page;
