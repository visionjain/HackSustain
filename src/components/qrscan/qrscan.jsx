import React, { useRef, useEffect, useState } from 'react';
import Map from '../map/map';
import jsQR from 'jsqr';

const Qrscan = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [scannedData, setScannedData] = useState(null);
    const [rewardPoints, setRewardPoints] = useState(0);
    const [qrScannedMessage, setQrScannedMessage] = useState(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        startCamera();
    }, []);

    useEffect(() => {
        if (qrScannedMessage) {
            const timer = setTimeout(() => {
                setQrScannedMessage(null);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [qrScannedMessage]);

    const handleScan = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        if (video.videoWidth === 0 || video.videoHeight === 0) {
            return;
        }

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);

        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code && code.data !== scannedData) {
            setScannedData(code.data);
            setRewardPoints(rewardPoints + 1);
            setQrScannedMessage('Ticket Scanned');
        }
    };

    useEffect(() => {
        const scanInterval = setInterval(handleScan, 1000); // Adjust the interval as needed
        return () => clearInterval(scanInterval);
    }, [rewardPoints]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <video ref={videoRef} autoPlay playsInline style={{ display: 'block', maxWidth: '100%', maxHeight: '80vh' }} />
                    <canvas ref={canvasRef} style={{ display: 'none' }} />
                    {scannedData && <p>Scanned Data: {scannedData}</p>}
                </div>
                <Map />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', backgroundColor: '#f2f2f2', fontSize: '24px', color: 'green' }}>
                {qrScannedMessage && <p>{qrScannedMessage}</p>}
                <p style={{ marginBottom: '10px' }}>Reward Received: {rewardPoints}PTS</p>
            </div>
            <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10%', backgroundColor: '#f2f2f2' }}>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Qrscan;
