import React, { useState, useEffect } from 'react';
import voiceMapping from './voiceMapping';

const VoiceSelector = ({ onSelect, onSpeechRateChange, onPitchChange, loading }) => {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/voices')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Filter out excluded voices
          const filteredVoices = data.voices.filter((voice) => voiceMapping[voice.name] !== undefined);
          setVoices(filteredVoices);
        } else {
          console.error('Failed to fetch voices:', data.error);
        }
      })
      .catch((error) => console.error('Error fetching voices:', error));
  }, []);

  const handleVoiceSelect = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div>
      {/* Removed the "Voice" label */}
      <select onChange={handleVoiceSelect} disabled={loading}>
        <option value="">Default</option>
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voiceMapping[voice.name] || voice.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceSelector;