"use client"
import React from 'react'
import "../globals.css"
import Navbar from '../components/Navbar'
import Card from "./component/Card"
import { motion } from 'framer-motion'

export default function Page() {
  const working = [
    {
      "title": "Rakshakrita: Empowering Citizen Voices",
      "description": "Rakshakrita helps the citizens be candid about their opinions and issues by providing them a platform to voice it where it can be heard. To voice their opinions, all the user needs to do is scan the QR code, which will redirect them to the official Rakshakrita website.",
      "img": "/citizen.png"
    },
    {
      "title": "User Registration and Anonymity",
      "description": "If it's the first time a user is accessing the website, a unique ID will be generated for that user to distinguish between users without hampering their anonymity. The location of the user will be verified within a 100-meter radius of the police station to ensure they belong to that locality.",
      "img": "/anonym.png"
    },
    {
      "title": "Multilingual Support",
      "description": "The platform will be available for users in multiple languages, whichever the user is comfortable with.",
      "img": "/multiling.png"
    },
    {
      "title": "User-Friendly Feedback Form",
      "description": "The feedback form is designed to be very user-friendly, providing an array of options for users to give their feedback. Users are expected to fill a mandatory field giving a description of their problem. Objective questions are included to help users provide more detailed feedback. Additionally, users can use speech-to-text or attach pictures and videos if they are comfortable with that.",
      "img": "/friends.png"
    },
    {
      "title": "Machine Learning Analysis",
      "description": "All elements of the feedback are then passed through a machine learning model, which analyzes the description, terming it as positive or negative. The analyzed feedback is then stored in the database for the authorities to see and create reports for the same.",
      "img": "/ml.png"
    },
    {
      "title": "Additional Features",
      "description": "Additional features of Rakshakrita include feedback reports for users to see which police stations around them are the best in public opinion. Heatmaps on a live map showing the intensity of negative feedback for localities are also available on the website.",
      "img": "/map.png"
    },
    {
      "title": "Periodic Reports to Higher Authorities",
      "description": "Periodic reports are sent to higher authorities, providing them a detailed report of the police stations that come under their jurisdictions. This helps them know if there are any wrongdoings going on and motivates them to fix those issues as soon as possible.",
      "img": "/chart.png"
    },
    {
      "title": "Conclusion",
      "description": "Thank you for using Rakshakrita. Your voice shall not go unheard.",
      "img": "/namaste.png"
    }
  ]
  
  return (
    <div className=' flex flex-col w-full h-full overflow-y-scroll'>
      <Navbar/>
      <div className="area z-10" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
      <div className=" z-20 flex w-full flex-col px-1 justify-center items-center lg:px-12">
        {/* <h1 className="bg-red-200 block text-center font-bold text-2xl mt-10 judging-criteria">JUDGING CRITERIA</h1> */}
        {/* <h1 className="pt-12 pb-2 px-4 text-2xl base:text-3xl lg:text-5xl font-extrabold flex justify-center items-center ">
        How it Works?
      </h1> */}
      <h1> 
        <svg id='hiwHeading' className=' py-12 w-[80vw] md:w-[60vw] lg:w-[40vw] fill-[#F86F03] border-slate-100'  viewBox="0 0 1042 115" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M962.797 90.6802L961.221 92.2558L962.606 94.0015C967.212 99.8096 972.47 104.278 978.392 107.341C984.398 110.447 991.582 111.94 999.844 111.94C1011.09 111.94 1020.3 109.201 1027.21 103.446C1034.27 97.6482 1037.77 89.7611 1037.77 80.064C1037.77 74.4387 1036.87 69.5711 1034.92 65.5784C1033.05 61.7236 1030.52 58.5374 1027.32 56.0766C1024.35 53.6253 1021.03 51.6383 1017.38 50.1132C1013.96 48.6494 1010.5 47.3315 1006.98 46.1597C1003.7 45.0337 1000.66 43.865 997.862 42.6547C995.325 41.4247 993.357 40.0219 991.89 38.4807C990.664 37.1063 989.96 35.2517 989.96 32.688C989.96 29.7915 991.008 27.7404 993.087 26.2286C995.403 24.6137 998.769 23.668 1003.44 23.668C1007.13 23.668 1010.27 24.4122 1012.93 25.8238L1012.97 25.8454L1013.01 25.8655C1015.82 27.2272 1018.59 29.3976 1021.3 32.4701L1023.06 34.4655L1024.94 32.5838L1036.17 21.3518L1037.76 19.7603L1036.35 18.011C1032.83 13.6634 1028.26 10.1378 1022.7 7.40781C1017.12 4.62172 1010.83 3.26001 1003.88 3.26001C997.428 3.26001 991.509 4.42009 986.161 6.78567C980.779 9.16624 976.429 12.6644 973.177 17.2801L973.177 17.2801L973.17 17.2896C969.947 21.9093 968.4 27.4721 968.4 33.84C968.4 39.2814 969.304 43.979 971.269 47.7994C973.154 51.4644 975.644 54.4998 978.749 56.8557L978.766 56.868L978.782 56.88C981.819 59.1071 985.105 60.9768 988.636 62.4899L988.675 62.5066L988.714 62.522C992.2 63.8778 995.64 65.1374 999.034 66.3009L999.074 66.3146L999.114 66.3269C1002.45 67.3454 1005.42 68.5394 1008.06 69.9006L1008.1 69.924L1008.15 69.9455C1010.74 71.1568 1012.73 72.6697 1014.18 74.4471C1015.47 76.0164 1016.21 78.1515 1016.21 81.072C1016.21 84.2694 1014.94 86.6705 1012.25 88.5142L1012.24 88.5238L1012.23 88.5336C1009.52 90.4434 1005.67 91.532 1000.42 91.532C994.772 91.532 990.348 90.4845 986.998 88.5641C983.5 86.4611 980.449 83.5549 977.854 79.7955L976.15 77.3274L974.029 79.4482L962.797 90.6802Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M940.948 109.66L941.694 110.5H942.817H964.417H970.03L966.276 106.328L920.282 55.2097L964.779 8.93272L968.849 4.69995H962.977H941.809H940.733L939.993 5.48164L900.965 46.7259V7.19995V4.69995H898.465H881.905H879.405V7.19995V108V110.5H881.905H898.465H900.965V108V64.6178L940.948 109.66Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M812.512 108V67.732H813.084L846.802 109.569L847.552 110.5H848.748H869.628H874.932L871.556 106.409L839.103 67.0745C842.653 66.4539 845.957 65.3904 849.002 63.868C854.192 61.2731 858.253 57.6019 861.105 52.8557C864.068 48.0862 865.504 42.5314 865.504 36.288C865.504 30.3102 864.058 24.9093 861.112 20.1625C858.272 15.3365 854.229 11.5732 849.055 8.87895C843.839 6.06645 837.856 4.69995 831.18 4.69995H812.512H810.012H804.828H802.328H793.452H790.952V7.19995V108V110.5H793.452H810.012H812.512V108ZM812.512 49.052V24.1H830.46C835.064 24.1 838.277 25.3883 840.471 27.6575C842.778 30.044 843.944 32.9613 843.944 36.576C843.944 40.7321 842.695 43.7112 840.419 45.8352C838.236 47.8674 834.989 49.052 830.316 49.052H812.512Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M687.13 96.0698L687.139 96.0788L687.148 96.0878C692.08 101.02 697.818 104.894 704.342 107.704C710.913 110.535 717.972 111.94 725.491 111.94C732.917 111.94 739.882 110.534 746.359 107.701C752.881 104.891 758.573 101.016 763.412 96.0788C768.345 91.1438 772.171 85.4018 774.885 78.8718C777.707 72.2152 779.111 65.1165 779.111 57.6C779.111 50.0886 777.709 43.037 774.885 36.4723C772.173 29.8508 768.348 24.0594 763.412 19.121C758.479 14.0897 752.736 10.2103 746.2 7.49223C739.723 4.66232 732.714 3.26001 725.203 3.26001C717.687 3.26001 710.631 4.66424 704.063 7.49223C697.615 10.2139 691.918 14.0977 686.986 19.1302L686.986 19.1306C682.155 24.0615 678.337 29.7934 675.531 36.307L675.525 36.3219L675.519 36.337C672.792 42.9005 671.439 49.9487 671.439 57.456C671.439 64.9636 672.792 72.0547 675.514 78.7066L675.522 78.7279L675.531 78.7491C678.34 85.2688 682.208 91.0474 687.13 96.0698ZM741.785 86.8413L741.776 86.8465L741.767 86.8519C737.124 89.6555 731.632 91.1 725.203 91.1C720.514 91.1 716.239 90.2913 712.348 88.7033C708.429 87.0076 705.069 84.7037 702.244 81.7938C699.518 78.8883 697.338 75.3897 695.719 71.2633C694.203 67.0582 693.431 62.463 693.431 57.456C693.431 50.7026 694.797 44.8856 697.447 39.9316C700.214 34.9387 703.931 31.1025 708.61 28.366L708.616 28.3624L708.622 28.3587C713.377 25.5409 718.879 24.1 725.203 24.1C730.005 24.1 734.279 24.9145 738.062 26.4981L738.071 26.502L738.081 26.5059C741.98 28.1011 745.329 30.3946 748.151 33.3934L748.164 33.407L748.177 33.4204C750.991 36.3222 753.163 39.8108 754.682 43.9226L754.694 43.9537L754.706 43.9845C756.301 47.9721 757.119 52.4515 757.119 57.456C757.119 64.2021 755.709 70.0689 752.959 75.1256L752.955 75.1325L752.952 75.1395C750.284 80.1185 746.572 84.0048 741.785 86.8413Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M565.559 108.78L566.124 110.5H567.934H579.454H581.286L581.838 108.753L601.774 45.6611L621.711 108.753L622.263 110.5H624.094H635.614H637.425L637.99 108.78L671.11 7.98033L672.187 4.69995H668.734H652.462H650.639L650.082 6.43593L629.764 69.7403L609.92 6.452L609.371 4.69995H607.534H596.014H594.178L593.629 6.45199L573.785 69.7403L553.467 6.43593L552.91 4.69995H551.086H534.814H531.362L532.439 7.98033L565.559 108.78Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M449.124 108V110.5H451.624H468.184H470.684V108V24.82H501.016H503.516V22.32V7.19995V4.69995H501.016H418.792H416.292V7.19995V22.32V24.82H418.792H449.124V108Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M385.39 108V110.5H387.89H404.45H406.95V108V7.19995V4.69995H404.45H387.89H385.39V7.19995V108Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M241.137 108.78L241.703 110.5H243.513H255.033H256.864L257.416 108.753L277.353 45.6611L297.289 108.753L297.841 110.5H299.673H311.193H313.003L313.568 108.78L346.688 7.98033L347.766 4.69995H344.313H328.041H326.217L325.66 6.43593L305.342 69.7403L285.498 6.452L284.949 4.69995H283.113H271.593H269.756L269.207 6.452L249.363 69.7403L229.045 6.43593L228.488 4.69995H226.665H210.393H206.94L208.017 7.98033L241.137 108.78Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M115.63 96.0698L115.639 96.0788L115.648 96.0878C120.58 101.02 126.318 104.894 132.842 107.704C139.413 110.535 146.472 111.94 153.991 111.94C161.417 111.94 168.382 110.534 174.859 107.701C181.381 104.891 187.073 101.016 191.912 96.0788C196.845 91.1438 200.671 85.4017 203.385 78.8718C206.207 72.2152 207.611 65.1165 207.611 57.6C207.611 50.0886 206.209 43.037 203.385 36.4723C200.673 29.8509 196.848 24.0594 191.912 19.121C186.979 14.0897 181.236 10.2103 174.7 7.49223C168.223 4.66232 161.214 3.26001 153.703 3.26001C146.187 3.26001 139.131 4.66424 132.563 7.49223C126.115 10.2139 120.418 14.0977 115.486 19.1302L115.486 19.1306C110.655 24.0615 106.837 29.7934 104.031 36.307L104.025 36.3219L104.019 36.337C101.292 42.9005 99.9395 49.9487 99.9395 57.456C99.9395 64.9636 101.292 72.0547 104.014 78.7066L104.022 78.7279L104.031 78.7491C106.84 85.2688 110.708 91.0474 115.63 96.0698ZM170.285 86.8413L170.276 86.8465L170.267 86.8519C165.624 89.6555 160.132 91.1 153.703 91.1C149.014 91.1 144.739 90.2913 140.848 88.7033C136.929 87.0076 133.569 84.7037 130.744 81.7938C128.018 78.8883 125.838 75.3897 124.219 71.2633C122.703 67.0582 121.931 62.463 121.931 57.456C121.931 50.7026 123.297 44.8856 125.947 39.9316C128.714 34.9387 132.431 31.1025 137.11 28.366L137.116 28.3624L137.122 28.3587C141.877 25.541 147.379 24.1 153.703 24.1C158.505 24.1 162.779 24.9145 166.562 26.4981L166.571 26.502L166.581 26.5059C170.48 28.1011 173.829 30.3946 176.651 33.3934L176.664 33.407L176.677 33.4204C179.491 36.3222 181.663 39.8108 183.182 43.9226L183.194 43.9537L183.206 43.9845C184.801 47.9721 185.619 52.4515 185.619 57.456C185.619 64.202 184.209 70.0689 181.459 75.1256L181.455 75.1325L181.452 75.1395C178.784 80.1185 175.072 84.0048 170.285 86.8413Z" stroke="#3e77b6" stroke-width="5" />
          <path d="M2.6084 108V110.5H5.1084H21.6684H24.1684V108V65.86H66.6884V108V110.5H69.1884H85.7484H88.2484V108V7.19995V4.69995H85.7484H69.1884H66.6884V7.19995V45.74H24.1684V7.19995V4.69995H21.6684H5.1084H2.6084V7.19995V108Z" stroke="#3e77b6" stroke-width="5" />
        </svg>
      </h1>
        <div className=" flex w-full justify-center items-center lg:px-5 px-2 gap-4 flex-col py-12">
          {working.map((element, index) => {
            return(
              <>
            <Card index={index} title={element.title} description={element.description} img={element.img}/>
            {index<working.length-1&&<motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1, y:0 },
        hidden: { opacity: 0, y:-40 }
        }} className=' p-4 bg-slate-400 rounded-full '><svg className=' rotate-90' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></motion.div>}
            </>
          )})}
        </div>
      </div>
      </div>
  )
}
