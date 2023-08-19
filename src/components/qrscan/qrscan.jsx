import React, { useRef, useEffect, useState } from 'react';
import Map from '../map/map';
import jsQR from 'jsqr';

const Qrscan = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play(); // Start playing the video
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();
  }, []);

  const handleScan = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    // Check if the video dimensions are available
    if (video.videoWidth === 0 || video.videoHeight === 0) {
      requestAnimationFrame(handleScan);
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);

    const code = jsQR(imageData.data, imageData.width, imageData.height);

    if (code) {
      setScannedData(code.data);
    }

    requestAnimationFrame(handleScan);
  };

  useEffect(() => {
    handleScan();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <video ref={videoRef} autoPlay playsInline style={{ display: 'block', maxWidth: '100%', maxHeight: '80vh' }} />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {scannedData && <p>Scanned Data: {scannedData}</p>}
      </div>
      <Map />
    </div>
  );
};

export default Qrscan;
