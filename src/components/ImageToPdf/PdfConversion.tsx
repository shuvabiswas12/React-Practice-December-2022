import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const PdfConversion = () => {
    const getPDF = () => {
        const page = document.getElementById("page");
        if (page) {
            html2canvas(page, { logging: true, useCORS: true })
                .then((canvas) => {
                    const imageWidth = 408;
                    const imageHeight = (canvas.height * imageWidth) / canvas.width;
                    const imageData = canvas.toDataURL("img/png");

                    // window.open(imageData, "_blank");
                    const pdf = new jsPDF("p", "pt", [imageWidth, imageHeight]);
                    pdf.addImage(imageData, "PNG", 0, 0, imageWidth, imageHeight);
                    pdf.save("TestPDF.pdf");
                })
                .catch((err) => console.log(err));
        }
    };
    return (
        <React.Fragment>
            <button onClick={getPDF}>Get PDF</button>
            <div className="container d-flex justify-content-center" id="page">
                <img src="rrr.png" alt="" />
            </div>
        </React.Fragment>
    );
};
