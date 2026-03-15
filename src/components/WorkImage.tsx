// import { useState } from "react";
// import { MdArrowOutward } from "react-icons/md";

// interface Props {
//   image: string;
//   alt?: string;
//   video?: string;
//   link?: string;
// }

// const WorkImage = (props: Props) => {
//   const [isVideo, setIsVideo] = useState(false);
//   const [video, setVideo] = useState("");
//   const handleMouseEnter = async () => {
//     if (props.video) {
//       setIsVideo(true);
//       const response = await fetch(`src/assets/${props.video}`);
//       const blob = await response.blob();
//       const blobUrl = URL.createObjectURL(blob);
//       setVideo(blobUrl);
//     }
//   };

//   return (
//     <div className="work-image">
//       <a
//         className="work-image-in"
//         href={props.link}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={() => setIsVideo(false)}
//         target="_blank"
//         data-cursor={"disable"}
//       >
//         {props.link && (
//           <div className="work-link">
//             <MdArrowOutward />
//           </div>
//         )}
//         <img src={props.image} alt={props.alt} />
//         {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
//       </a>
//     </div>
//   );
// };

// export default WorkImage;

import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      // Using a try-catch for better reliability
      try {
        const response = await fetch(`src/assets/${props.video}`);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setVideo(blobUrl);
      } catch (error) {
        console.error("Video failed to load", error);
      }
    }
  };

  return (
    /* Added style={{ width: '100%', height: '100%' }} to ensure the 
       component fills the carousel-image-wrapper exactly 
    */
    <div className="work-image" style={{ width: '100%', height: '100%' }}>
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
        style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        {/* The key fix: Ensuring the image fits without overflowing */}
        <img
          src={props.image}
          alt={props.alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
        />

        {isVideo && (
          <video
            src={video}
            autoPlay
            muted
            playsInline
            loop
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: 'transparent'
            }}
          ></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;