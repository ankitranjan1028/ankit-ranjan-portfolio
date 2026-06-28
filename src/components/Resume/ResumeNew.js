import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Ankit_Ranjan_SDE.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function getPdfWidth(viewportWidth) {
  if (viewportWidth > 992) {
    return Math.min(680, viewportWidth - 120);
  }
  if (viewportWidth > 576) {
    return viewportWidth - 64;
  }
  return viewportWidth - 32;
}

function ResumeNew() {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pdfWidth = getPdfWidth(width);

  return (
    <Container fluid className="resume-section">
      <Particle />

      <div className="resume-section-header">
        <span className="section-label section-label-center">Credentials</span>
        <h1 className="project-heading">
          My <span className="purple">Resume</span>
        </h1>
      </div>

      <div className="resume-download-row">
        <Button className="resume-download-btn" href={pdf} target="_blank">
          <AiOutlineDownload />
          Download CV
        </Button>
      </div>

      <div className="resume-preview">
        <Document file={pdf} loading={<p className="resume-loading">Loading resume…</p>}>
          <Page
            pageNumber={1}
            width={pdfWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      <div className="resume-download-row resume-download-row-bottom">
        <Button className="resume-download-btn" href={pdf} target="_blank">
          <AiOutlineDownload />
          Download CV
        </Button>
      </div>
    </Container>
  );
}

export default ResumeNew;
