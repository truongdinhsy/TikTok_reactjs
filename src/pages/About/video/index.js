import classNames from "classnames/bind";
import styles from "./video.module.scss";

import React, { useRef, useEffect } from "react";

import videos from "~/acess/videos";
const cn = classNames.bind(styles);
function Video() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const fetchAndPlayVideo = async () => {
            try {
                // Tải video từ URL
                const response = await fetch(videos.video); // Thay thế bằng đường dẫn đến video của bạn
                const videoBlob = await response.blob();

                // Tạo URL đối tượng cho video blob
                const videoUrl = URL.createObjectURL(videoBlob);

                // Tạo video element để sử dụng với MediaSource
                const video = document.createElement("video");
                video.src = videoUrl;
                video.muted = true; // Tắt tiếng video
                video.play();

                video.addEventListener("ended", () => {
                    video.currentTime = 0; // Quay lại đầu video
                    video.play(); // Play lại video
                });
                // Khi video sẵn sàng chơi, bắt đầu vẽ lên canvas
                video.addEventListener("loadeddata", () => {
                    video.play();

                    const drawFrame = () => {
                        if (video.readyState === video.HAVE_ENOUGH_DATA) {
                            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        }
                        requestAnimationFrame(drawFrame);
                    };

                    drawFrame();
                });
            } catch (error) {
                console.error("Error loading video", error);
            }
        };

        fetchAndPlayVideo();
    }, []);
    return (
        <div className={cn("banner-video")}>
            <canvas className={cn("banner")} ref={canvasRef} width="1440" height="1280"></canvas>
        </div>
    );
}

export default Video;
