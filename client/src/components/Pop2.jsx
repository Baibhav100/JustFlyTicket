  import React from 'react'
  import Modal from 'react-modal';
  // import jsPDF from 'jspdf';
  import html2pdf from 'html2pdf.js';


  Modal.setAppElement('#root');//set the root element to be accessible
  const Pop2 = ({ isOpen, onClose, alphanumericCode,
    email,
    user,
    num,
    trip1,
    startDate, endDate,
    searchTerm,
    dsearchTerm,
  }) => {

    const downloadPDF = () => {
      const styles = `
        .pdf-container {
          font-family: 'Arial', sans-serif;
          width:100%;
          margin-top:-16%;
          height:500%;
          border-radius: 5px;
          background-color:#fff;
        }

        .image-div{
          width:100%;
          display:flex;
          justify-content:center;
         
        }
        h1{
          text-align:center;
          font-size:40px;
          font-weight:bold;
          margin-top:-25%;
          color:#351d98;
        }
     

      

      `;
  const image=require('../images/Logo.png');
  const emailIcon =require('../images/email1.png');
      // Generate content dynamically using props
      const content = `
        <div class="pdf-container">
        <div class='image-div'>
        <img class='logo' src=${image}/>
        </div>
       
        <h1>Flight Confirmation</h1>
        <h3 style='text-align:center;font-size:24px;font-weight:bold;'>${user}</h3>
        <h2 style='text-align:center; padding:10px;'>Reference Number:<b>${alphanumericCode}</b></h2>
        <div style='display:flex;justify-content:center;width:100%'>
        <div style='width:600px ;height:300px;margin-top:23px; border-radius:3%;padding:20px;background:#351d98;'>
        <div style='width:100%;display:flex;justify-content:space-around;align-items:center;'>
        <div style='width:200px;display:flex-col;justify-content:center;align-items:center; text-align:center'>
        <h2 style='color:white;font-size:45px;font-weight:bolder''>${searchTerm.slice(0,3)}</h2>
        <h2 style='color:white;font-size:14px;margin-top:10px;'>${searchTerm.slice(4,60)}</h2>

        </div>
        <p style='color:white;'>To</p>
        <div style='width:300px;display:flex-col;justify-content:center;align-items:center; text-align:center'>
        <h2 style='color:white;font-size:45px;font-weight:bolder'>${dsearchTerm.slice(0,3)}</h2>
        <h2 style='color:white;font-size:14px;margin-top:10px;'>${dsearchTerm.slice(4,60)}</h2>

        </div>
        </div>
          <div style='display:flex;width:100% ;justify-content:space-between;color:white; margin-top:12%;'>
          <div>
          <p style='font-weight:bold;'>Departure Date</p>
          <p>${startDate}</p>
          </div>
          <div>
          <p style='font-weight:bold;'>Return Date</p>
          <p>${endDate}</p>
          </div>
          </div>
          <p style='color:white;margin-top:20px; font-weight:bold;'>${trip1}</p>
        </div>  
           
        </div>
        <div>
        <div style='width:100%;height:200px'>
        <p style='color:gray;margin-top:10%'> Please Note: Your booking query with  reference number <b>${alphanumericCode}</b> has been received. Please make a note of this number for future reference. One of our customer service representatives will contact you to get you the cheapest flight deals on your upcoming trip. For any futher queries, kindly call us at <a href="tel:+18883506579"><b>+1 (888) 350-6579</b></p>
        </div>
        <div style='width:100%;display:flex;justify-content:center;gap:60px;font-size:12px; margin-top:2%;'>
          <div style='display:flex;'>
          <img style='width:30px;height:30px;margin-top:-2%'src=${emailIcon}/>
          <p>ticketing@justflyticket.com</p>

          </div>
          <div>
        <p>  Contact Us @ <b>+1 (888) 350-6579</b>  </p>
          </div>

        </div>
        </div>
      `;

      const element = document.createElement('div');
      element.innerHTML = content;

      // Append the styles as a style tag
      const styleTag = document.createElement('style');
      styleTag.innerHTML = styles;
      element.appendChild(styleTag);

      html2pdf(element, {
        margin: 10,
        filename: 'Booking_receipt.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      });
    };

    return (
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div className='flex justify-between items-center md:w-[100%] h-screen bg-[#1f2937] text-white'>
          <div className='flex justify-center items-center md:w-[100%] '>
            <div className='w-[50%] md:w-[90%] gap-3 justify-between items-center md:flex '>
              <div>
                <div className='flex justify-center w-full items-center'>
                  <img className='text-center w-[140px] h-[120px]' src={require('../images/popup1.png')} alt="" />
                </div>
                <p className='p-2 w-full text-sm md:w-[400px] text-justify'>
                  Your booking query with  reference number <b> {alphanumericCode} </b> has been received. Please make a note of this number for future reference. One of our customer service representatives will contact you to get you the cheapest flight deals on your upcoming trip. For any futher queries, kindly call us at <a href="tel:+18883506579"><b>+1 (888) 350-6579</b></a>
                </p>
                <div className='w-[100%] flex justify-center items-center mt-6'>
                  <button className='bg-red-700 p-2 text-white text-center' onClick={onClose}>Thank You!</button>
                  <button className='bg-blue-500 p-2 text-white text-center ml-2' onClick={downloadPDF}>
                  <div className='hidden'>
                  </div>
                    Download as PDF
                  </button>
                </div>
              </div>
              <div className=' w-full md:w-[60%] h-[100px] md:h-[300px] bg-slate-200 flex justify-center items-center my-3'>
                <p className=' text-md md:text-3xl text-gray-500'>ADVERTISEMENT</p>
              </div>
            </div>



          </div>
        </div>

      </Modal>
    )
  }

  export default Pop2
