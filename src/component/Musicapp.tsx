"use client"; 

import { useState, useRef, useEffect } from "react";

interface Song {
  title: string;
  src: string;
}

const songs: Song[] = [
  { title: "Tedy Vigry wal", src: '/music/song-1.m4a' }, 
  { title: "Vigar Gaii Ay", src: '/music/song-2.m4a' },
  { title: "Mehboob Juda", src: '/music/song-3.m4a' }
];

const Musicapp = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currentSongIndex !== null && audioRef.current) {
      const audio = audioRef.current;
      console.log("Setting audio src to:", songs[currentSongIndex].src);
      audio.src = songs[currentSongIndex].src; 
      audio.play()
        .then(() => console.log("Playing:", songs[currentSongIndex].title))
        .catch((error) => console.log("Error playing audio:", error));
    }
  }, [currentSongIndex]);

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
  };

  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentSongIndex(null);
  };

  const nextSong = () => {
    if (currentSongIndex !== null) {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);
    }
  };

  const prevSong = () => {
    if (currentSongIndex !== null) {
      const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      setCurrentSongIndex(prevIndex);
    }
  };

  const replaySong = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => console.log("Error replaying audio:", error));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 mb-4 bg-white rounded shadow-2xl">
  <h1 className="text-2xl font-bold mb-4 text-center">My Music App</h1>
  <ul className="space-y-2">
    {songs.map((song, index) => (
      <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded shadow">
        <span>{song.title}</span>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => playSong(index)}
        >
          ▶️
        </button>
      </li>
    ))}
  </ul>
  {currentSongIndex !== null && (
    <div className="mt-6 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">▶️: {songs[currentSongIndex].title}</h2>
      <audio ref={audioRef} controls className="w-full mb-4" />
      <div className="flex justify-between">
        <button 
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          onClick={prevSong}
        >
          ⏪
        </button>
        <button 
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          onClick={nextSong}
        >
          ⏩
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={stopSong}
        >
          ⏸️
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={replaySong}
        >
          🔄
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default Musicapp;
