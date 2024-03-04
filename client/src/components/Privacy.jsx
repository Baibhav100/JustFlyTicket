import React from 'react'
import Footer from './Footer'
import Popup from './Popup'
import { AiOutlinePhone } from 'react-icons/ai'

const Privacy = () => {
  return (
<>
<div>
    <Popup/>
  </div>
    <div className='w-[100%]  bg-slate-500 h-screen text-justify'>
    {/* <div className='w-[100%] h-screen flex justify-center items-center bg-[url(https://wallpapercave.com/wp/wp12411255.jpg)] bg-cover bg-no-repeat'> */}
    <div className='w-[100%] h-screen flex justify-center items-center text-black bg-cover bg-no-repeat'>
<div className='w-[90%] h-screen  lg:w-[80%] lg:flex justify-center'>
<div className="bg-white overflow-hidden w-full h-screen overflow-y-scroll no-scrollbar ">
<div className="container mx-auto p-10 ">
  <h1 className='text-center text-3xl font-semibold'>Privacy Policy</h1>
  <p className='py-3 mt-[5%]'>Justflyticket is committed to protecting the privacy of your personal information. This Privacy Policy outlines how we collect, use, and disclose your information when you visit our website and use our services.</p>
  <p className='py-3 font-bold'>1. Information We Collect</p>
  <p>Personal Information: When you make a flight reservation or create an account on our website, we may collect personal information such as your name, email address, phone number, and payment details.</p>
  <p>Booking Information: We collect information about your flight reservations, including flight details, travel dates, and passenger information.</p>
  <p>Communications: We may collect information from communications between you and our customer support team and any feedback or reviews you provide.</p>
  <p>Usage Data: We may collect information about how you interact with our website, including your IP address, browser type, device information, and pages visited.</p>
  <p className='py-3 font-bold'>2. Use of Information</p>
<p>Provide Services: We use your personal information to process flight reservations, communicate with you about your bookings, and provide customer support.</p>
<p>Personalization: We may use your information to personalize your experience on our website, such as recommending flights based on your past bookings.</p>
<p>Marketing: If you have permission, we may use your contact information to send you promotional emails or newsletters about our services and special offers.</p>
<p>Analytics: We may use usage data to analyze trends, monitor the performance of our website, and improve our services.</p>
<p className='py-3 font-bold'>3. Data Sharing</p>
<p>Security Measures: We take reasonable precautions to secure your personal information against unauthorized access, use, or disclosure. These measures include encryption, access limits, and regular security audits.</p>
<p>Data Retention: We keep your personal information for as long as necessary to carry out the objectives described in this Privacy Policy unless a more extended retention period is needed or permitted by law.
</p>
<p className='py-3 font-bold'>5. Children's Privacy</p>
<p>Age Limitation: Our website and services are not intended for children under 18. We do not intentionally collect personally identifiable information from minors under the age of 18.</p>
<p className='py-3 font-bold'>6. Changes to this Privacy Policy</p>
<p>Updates: We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. All material modifications will be updated on the Privacy Policy on our website.
</p>
<p className='py-3 font-bold'>7. Data Transfers</p>
<p>International Transfers: Your personal information may be transferred to and processed in countries outside your country of residence, including countries with data protection laws different from yours. By using our website and services, you agree to these transfers.</p>
<p>Data Protection Safeguards: Where required by law, we will implement appropriate safeguards to protect your personal information when transferring it to countries outside of your country of residence.</p>
<p className='py-3 font-bold'>8. Data Subject Rights</p>
<p>Additional Rights: In addition to the rights outlined in section 6, you may have other rights under applicable data protection laws, such as the right to restrict processing of your Personal information and the right to data portability.</p>
<p>Exercise of Rights: To exercise any of your rights under this Privacy Policy, please contact us using the contact information provided in section 11. We will respond to your request within the time limitations specified by law.
</p>
<p className='py-3 font-bold'>9. Third-Party Advertisers</p>
<p>Advertising Partners: We may work with third-party advertisers to display advertisements on our website. These advertisers may use cookies and similar tracking technologies to collect information about your browsing behavior in order to display targeted advertisements.</p>
<p className='py-3 font-bold'>10. Data Retention</p>
<p>Retention Period: We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
<p className='py-3 font-bold'>11. Consent Withdrawal</p>
<p>Withdrawal of Consent: You may withdraw your consent to processing your personal information at any time by contacting us using the contact information provided in section 11. However, please note that withdrawal of consent may affect the availability and functionality of our website and services.
</p>
<p className='py-3 font-bold'>12. Contact Us</p>
<p>Contact Information: If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at +1 (888) 350-6579.
By using Justflyticket's website and services, you consent to collecting, using, and disclosing your personal information as described in this Privacy Policy.</p>
  </div>


</div>
 
</div>

</div>

<div> 
    <button className='fixed z-10 right-[2%] top-[80%] ml-9 text-small uppercase animate-bounce bg-[#C70039] rounded-[50%] p-4  text-white hover:border-b'><a href="tel:+18883506579">< AiOutlinePhone size={30}/></a></button>
  </div>
<Footer/>
    </div>
</>
    
  )
}

export default Privacy