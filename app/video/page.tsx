"use client"

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const VideoPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const taskId = searchParams.get('id'); // Adjust 'taskId' to match your query parameter
  const [videoURL, setVideoURL] = React.useState("");
  const [error, setError] = React.useState("");
  const [progress, setProgress] = React.useState(5);

  
  const progressBar = (progress: number) => {
    if (progress === 100) {
      return null;
    }
    return (
      <div className="w-full animate-pulse bg-gray-300 h-2 rounded">
        <div className="bg-green-500 h-2 rounded" style={{ width: progress + "%" }}></div>
      </div>
    );
  }

  return (
    <div>
      <section className="flex flex-col gap-4">
        <div className="inline-block">
          <h1 className="text-4xl font-bold">Your video is {progress}% ready</h1>
          <p className="text-lg">
            Please wait a moment. We are generating a video for you. It will be ready soon.
          </p>
          <span className="text-xs">Task ID: {taskId}</span>
          {progressBar(progress)}
        </div>
      </section>

      {videoURL && (
        <section className="flex flex-col gap-4 mt-3">
          <div className="inline-block">
            <video controls className="w-1/2 h-80">
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}

      {error && (
        <section className="flex flex-col gap-4 mt-3">
          <div className="inline-block">
            <h1 className="text-4xl font-bold">Error</h1>
            <p className="text-lg">
              {error}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default VideoPage;