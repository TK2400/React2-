import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }
  
  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
//  ALTERNATYVA
// export default function Picture2() {
//     const [isActive, setIsActive] = useState(false);
//     if (isActive) {
//       return (
//         <div
//           className="background"
//           onClick={() => setIsActive(false)}
//         >
//           <img
//             className="picture picture--active"
//             alt="Rainbow houses in Kampung Pelangi, Indonesia"
//             src="https://i.imgur.com/5qwVYb1.jpeg"
//             onClick={e => e.stopPropagation()}
//           />
//         </div>
//       );
//     }
//     return (
//       <div className="background background--active">
//         <img
//           className="picture"
//           alt="Rainbow houses in Kampung Pelangi, Indonesia"
//           src="https://i.imgur.com/5qwVYb1.jpeg"
//           onClick={() => setIsActive(true)}
//         />
//       </div>
//     );
//   }
