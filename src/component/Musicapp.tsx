"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaStepForward, FaStepBackward, FaRedo, FaRandom ,FaPause,FaTimes} from 'react-icons/fa';
interface Song {
  title: string;
  src: string;
  images: string;
}

const songs: Song[] = [
  { title: 'Sidhu Jutt', images: '/images/sidhu.jpeg', src: '/music/spotifydown.com - 410.mp3' },
  { title: 'Karan Aujla', images: '/images/aujla.jpg', src: '/music/spotifydown.com - Bachke Bachke (feat. Yarah).mp3' },
  { title: 'Diljit Doshanjh', images: '/images/dilji.webp', src: '/music/spotifydown.com - Born to Shine.mp3' },
  { title: 'Atif Aslam', images: '/images/atif.jpg', src: '/music/spotifydown.com - Woh Lamhe Woh Baatein - From _Zeher_.mp3' },
  { title: 'Darshan Raval', images: '/images/darshan.jpg', src: '/music/spotifydown.com - Mehrama.mp3' },
  { title: 'Asim Azhar', images: '/images/asim.jpeg', src: '/music/spotifydown.com - Jo Tu Na Mila.mp3' },
  { title: 'Ap Dhillion', images: '/images/ap.jpeg', src: '/music/spotifydown.com - Excuses.mp3' },
  { title: 'Shubh', images: '/images/shubh.jpg', src: '/music/spotifydown.com - King Shit.mp3' },
  { title: 'Pritam', images: '/images/pritam.jpeg', src: '/music/spotifydown.com - O Maahi.mp3' },
  { title: 'Vishal Mishra', images: '/images/vishal.jpeg', src: '/music/spotifydown.com - Manjha.mp3' },
  { title: 'Arjit Singh', images: '/images/arjit.jpg', src: '/music/spotifydown.com - Satranga (From _ANIMAL_).mp3' },
  { title: 'Badshah', images: '/images/Badshah.webp', src: '/music/spotifydown.com - Naina (From _Crew_).mp3' },
  { title: 'Kaifi Khalil', images: '/images/kaifi.jpg', src: '/music/spotifydown.com - Kahani Suno 2.0.mp3' },
  { title: 'Shreya Ghoshal', images: '/images/shreya.jpeg', src: '/music/spotifydown.com - Yimmy Yimmy.mp3' },
  { title: 'Gulli Mata', images: '/images/gulli.jpeg', src: '/music/spotifydown.com - Guli Mata.mp3' },
  { title: 'Mitraj', images: '/images/mitraj.jpg', src: '/music/spotifydown.com - Gulaab.mp3' },
  { title: 'Sunny Malton', images: '/images/sunny.jpeg', src: '/music/spotifydown.com - Never Fold.mp3' },
  { title: 'Shisha', images: '/images/Arbaz.jpeg', src: '/music/spotifydown.com - Shisha - Arbaz Khan ft. Zohaib Amjad _ Aryan Khan (Master).mp3' },
  { title: 'Tanchik Gachi', images: '/images/teri.jpg', src: '/music/spotifydown.com - Teri Baaton Mein Aisa Uljha Jiya Title Song (From _Teri Baaton Mein Aisa Uljha Jiya_).mp3' },
  { title: 'Sonu Nigham', images: '/images/sonu.jpg', src: '/music/spotifydown.com - Kal Ho Naa Ho.mp3' },
  { title: 'Nehal Naseem', images: '/images/310967345_203971148668311_7295314477120829221_n.jpg', src: '/music/spotifydown.com - Sadqay.mp3' },
  { title: 'Ayush Khurrana', images: '/images/halo.jpg', src: '/music/spotifydown.com - Nazm Nazm.mp3' },
  // second songs 
  // { title: 'Sidhu Jutt', images: '/images/sidhu.jpeg', src: '/music/spotifydown.com - 410.mp3' },
  // { title: 'Karan Aujla', images: '/images/aujla.jpg', src: '/music/spotifydown.com - Bachke Bachke (feat. Yarah).mp3' },
  // { title: 'Diljit Doshanjh', images: '/images/dilji.webp', src: '/music/spotifydown.com - Born to Shine.mp3' },
  // { title: 'Atif Aslam', images: '/images/atif.jpg', src: '/music/spotifydown.com - Woh Lamhe Woh Baatein - From _Zeher_.mp3' },
  // { title: 'Darshan Raval', images: '/images/darshan.jpg', src: '/music/spotifydown.com - Mehrama.mp3' },
  // { title: 'Asim Azhar', images: '/images/asim.jpeg', src: '/music/spotifydown.com - Jo Tu Na Mila.mp3' },
  // { title: 'Ap Dhillion', images: '/images/ap.jpeg', src: '/music/spotifydown.com - Excuses.mp3' },
  // { title: 'Shubh', images: '/images/shubh.jpg', src: '/music/spotifydown.com - King Shit.mp3' },
  // { title: 'Pritam', images: '/images/pritam.jpeg', src: '/music/spotifydown.com - O Maahi.mp3' },
  // { title: 'Vishal Mishra', images: '/images/vishal.jpeg', src: '/music/spotifydown.com - Manjha.mp3' },
  // { title: 'Arjit Singh', images: '/images/arjit.jpg', src: '/music/spotifydown.com - Satranga (From _ANIMAL_).mp3' },
  // { title: 'Badshah', images: '/images/Badshah.webp', src: '/music/spotifydown.com - Naina (From _Crew_).mp3' },
  // { title: 'Kaifi Khalil', images: '/images/kaifi.jpg', src: '/music/spotifydown.com - Kahani Suno 2.0.mp3' },
  // { title: 'Shreya Ghoshal', images: '/images/shreya.jpeg', src: '/music/spotifydown.com - Yimmy Yimmy.mp3' },
  // { title: 'Gulli Mata', images: '/images/gulli.jpeg', src: '/music/spotifydown.com - Guli Mata.mp3' },
  // { title: 'Mitraj', images: '/images/mitraj.jpg', src: '/music/spotifydown.com - Gulaab.mp3' },
  // { title: 'Sunny Malton', images: '/images/sunny.jpeg', src: '/music/spotifydown.com - Never Fold.mp3' },
  // { title: 'Shisha', images: '/images/Arbaz.jpeg', src: '/music/spotifydown.com - Shisha - Arbaz Khan ft. Zohaib Amjad _ Aryan Khan (Master).mp3' },
  // { title: 'Tanchik Gachi', images: '/images/teri.jpg', src: '/music/spotifydown.com - Teri Baaton Mein Aisa Uljha Jiya Title Song (From _Teri Baaton Mein Aisa Uljha Jiya_).mp3' },
  // { title: 'Sonu Nigham', images: '/images/sonu.jpg', src: '/music/spotifydown.com - Kal Ho Naa Ho.mp3' },
];

const MusicApp = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currentSongIndex !== null && audioRef.current) {
      const audio = audioRef.current;
      audio.src = songs[currentSongIndex].src;
      audio.play()
        .then(() => console.log("Playing:", songs[currentSongIndex].title))
        .catch((error) => console.log("Error playing audio:", error));
    }
  }, [currentSongIndex]);

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsModalVisible(true);
  };

  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentSongIndex(null);
    setIsModalVisible(false);
  };

  const nextSong = () => {
    if (currentSongIndex !== null) {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);
    }
  };

  const shuffleSongs = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSongIndex(randomIndex);
    setIsModalVisible(true);
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

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-gradient-to-b from-orange-500 to-pink-600 min-h-screen text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Good evening, Sameer!</h1>
        <div className="flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 text-orange-700 rounded-xl"
          />
          <button className="p-2 rounded bg-white text-black">🔔</button>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Songs</h2>
      <div className="flex flex-wrap justify-center mb-4">
        {filteredSongs.map((song, index) => (
          <div key={index} className="flex flex-col items-center mr-4 mb-4">
            {song.images && (
              <img
                src={song.images}
                alt={song.title}
                className="w-28 h-28 object-cover rounded-xl cursor-pointer"
                onClick={() => playSong(index)}
              />
            )}
            <span className="mt-2">{song.title}</span>
          </div>
        ))}
      </div>
      {isModalVisible && currentSongIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md">
          <div className="bg-gradient-to-b from-orange-500 to-pink-600 text-white p-4 rounded-lg w-3/4 max-w-lg relative">
            <div className="flex flex-col items-center mb-4">
              <img
                src={songs[currentSongIndex].images}
                alt={songs[currentSongIndex].title}
                className="w-full h-auto max-h-48 object-contain rounded-2xl"
              />
              <audio ref={audioRef} src={songs[currentSongIndex].src} controls className=" custom-audio w-full mt-4" />
              <div className="flex justify-center mt-4">
                <button onClick={prevSong} className="mx-2 p-2 bg-black text-white rounded"><FaStepBackward /></button>
                <button onClick={nextSong} className="mx-2 p-2 bg-black text-white rounded"> <FaStepForward /></button>
                <button onClick={shuffleSongs} className="mx-2 p-2 bg-black text-white rounded"> <FaRandom /></button>
                <button onClick={replaySong} className="mx-2 p-2 bg-black text-white rounded"><FaRedo /></button>
                <button onClick={stopSong} className="mx-2 p-2 bg-black text-white rounded"><FaPause /></button>
              </div>
            </div>
            <button
              onClick={() => setIsModalVisible(false)}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full"
            >
               <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicApp;
