import React, { useState, useRef } from 'react';
import VoiceSelector from './VoiceSelector';
import './App.css';

const App = () => {
  const [textToSpeak, setTextToSpeak] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [speechRate, setSpeechRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSpeakingLabelVisible, setIsSpeakingLabelVisible] = useState(false);
  const [isOldIcon, setIsOldIcon] = useState(true);
  const [audioPosition, setAudioPosition] = useState(0);
  const audioRef = useRef(new Audio());

  const handleVoiceSelect = (voice) => {
    setSelectedVoice(voice);
  };

  const handleTextChange = (e) => {
    setTextToSpeak(e.target.value);
  };

  const handleSpeechRateChange = (rate) => {
    setSpeechRate(rate);
  };

  const handlePitchChange = (newPitch) => {
    setPitch(newPitch);
  };

  const handleSpeak = async () => {
    try {
      setLoading(true);
      setError(null);

      if (isSpeaking) {
        const currentPosition = audioRef.current.currentTime;
        audioRef.current.pause();
        setIsSpeaking(false);
        setIsSpeakingLabelVisible(false);
        setIsOldIcon(true);
        setAudioPosition(currentPosition);
      } else {
        setIsSpeaking(true);
        setIsSpeakingLabelVisible(true);
        setIsOldIcon(false);

        console.log('Sending request:', { textToSpeak, selectedVoice, speechRate, pitch });

        const response = await fetch('http://localhost:5000/speak', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: textToSpeak,
            voice: selectedVoice,
            speechRate,
            pitch,
          }),
        });

        console.log('Received response:', response);

        if (!response.ok) {
          throw new Error('Speech synthesis failed');
        }

        const result = await response.arrayBuffer();
        const base64Data = btoa(String.fromCharCode.apply(null, new Uint8Array(result)));

        audioRef.current.src = 'data:audio/wav;base64,' + base64Data;

        if (audioPosition > 0) {
          audioRef.current.currentTime = audioPosition;
        }

        audioRef.current.play();

        // Remove the event listener before adding a new one
        audioRef.current.removeEventListener('ended', handleAudioEnded);
        audioRef.current.addEventListener('ended', handleAudioEnded);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setError('Speech synthesis failed. Please try again.');
      setIsSpeaking(false);
      setIsSpeakingLabelVisible(false);
      setIsOldIcon(true);
      setAudioPosition(0);
    }
  };

  const handleClear = () => {
    setTextToSpeak('');
    setSelectedVoice('');
    setSpeechRate(1);
    setPitch(1);
    setIsSpeaking(false);
    setIsSpeakingLabelVisible(false);
    setIsOldIcon(true);
    setAudioPosition(0);
  };

  // Event handler for the 'ended' event
  const handleAudioEnded = () => {
    setIsSpeaking(false);
    setIsSpeakingLabelVisible(false);
    setIsOldIcon(true);
    setAudioPosition(0);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Ultimate TTS Tool</h1>
      </div>

      <div className="app-component-header">
        <VoiceSelector
          onSelect={handleVoiceSelect}
          onSpeechRateChange={handleSpeechRateChange}
          onPitchChange={handlePitchChange}
        />

        <div className="speed-input-container">
          <label>Speed</label>
          <select
            value={speechRate}
            onChange={(e) => handleSpeechRateChange(parseFloat(e.target.value))}
          >
            <option value={0.1}>0.1x</option>
            <option value={0.2}>0.2x</option>
            <option value={0.5}>0.5x</option>
            <option value={1}>1.0x</option>
            <option value={2}>2.0x</option>
            <option value={3}>3.0x</option>
            <option value={4}>4.0x</option>
          </select>
        </div>

        <button className="speak-button" onClick={handleSpeak} disabled={loading}>
          {isSpeaking ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
              <path d="M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z" fill="white" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className={isOldIcon ? 'default-icon' : ''}
            >
              <path d="M3 22v-20l18 10-18 10z" fill="white" />
            </svg>
          )}
        </button>

        <div className="pitch-input-container">
          <label>Pitch</label>
          <select
            value={pitch}
            onChange={(e) => handlePitchChange(parseFloat(e.target.value))}
          >
            <option value={0.1}>0.1x</option>
            <option value={0.2}>0.2x</option>
            <option value={0.5}>0.5x</option>
            <option value={1}>1.0x</option>
            <option value={2}>2.0x</option>
          </select>
        </div>

        <button className="clear-button" onClick={handleClear}>
          <div className="clear-icon-container">
            Clear
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="clear-icon"
              width="15"  // Adjust the width as needed
              height="15" // Adjust the height as needed
            >
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </div>
        </button>
      </div>

      <textarea
        placeholder="Enter your text here"
        value={textToSpeak}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default App;
