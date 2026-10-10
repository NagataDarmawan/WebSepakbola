"use client";

import { X } from "lucide-react";
import { VideoItem } from "@/constants/videoData";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {/* Header Modal */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-sm md:text-base font-black uppercase text-white line-clamp-1 pr-4">
            {video.judul}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-primary transition-colors"
            aria-label="Tutup Video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Embed Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={video.youtubeUrl}
            title={video.judul}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}