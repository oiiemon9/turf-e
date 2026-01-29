import React from 'react';

export default function VideoSection() {
  return (
    <div className="relative">
      <video
        src="https://res.cloudinary.com/dzfrakxek/video/upload/v1769665877/AQMzIIMrwgjMnkJWuvfReFOiN1QBJ2HMbcymvPN-P9yC3CX6nbnWJ9pzX-lCX8Y-OdjibLuf__vCEvBLY8h-pXm28UsB2ryeMWhBmg4A0uacEA_lshida.mp4"
        autoPlay
        playsInline
        loop
        muted
        className="md:aspect-[16/6] w-full object-cover"
      ></video>
      <div className="bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.83)_100%)] h-full w-full absolute top-0"></div>
    </div>
  );
}
