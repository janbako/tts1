// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const textToSpeech = require('@google-cloud/text-to-speech');
const voiceMapping = require('./voiceMapping');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const client = new textToSpeech.TextToSpeechClient({
  keyFilename: 'swift-terra-406722-09821ad2c1a9.json',
});

const modifyVoiceNames = (voices) => {
  return voices.map((voice) => {
    const customName = voiceMapping[voice.name];
    if (customName) {
      return {
        name: customName,
      };
    } else {
      const modifiedName = voice.name.replace(/\s+$/, '').replace(/-+$/, '');
      return {
        name: modifiedName,
      };
    }
  });
};

app.get('/voices', async (req, res) => {
  try {
    const [response] = await client.listVoices({});
    const modifiedVoices = modifyVoiceNames(response.voices);
    res.json({ success: true, voices: modifiedVoices });
  } catch (error) {
    console.error('Error in listing voices:', error);
    res.status(500).send({ success: false, error: 'Failed to fetch voices' });
  }
});

app.post('/speak', async (req, res) => {
    const { text, voice, speechRate, pitch } = req.body;

    console.log('Received request:', { text, voice, speechRate, pitch });
  
    if (!text) {
      res.status(400).send({ success: false, error: 'No text provided for speech synthesis' });
      return;
    }
  
    try {
      const request = {
        input: { text },
        voice: { name: voice, languageCode: 'en-US', ssmlGender: 'none' },
        audioConfig: {
          audioEncoding: 'LINEAR16',
          pitch: pitch,
          speakingRate: speechRate,
        },
      };
  
      const [response] = await client.synthesizeSpeech(request);
      const audioContent = response.audioContent;
  
      res.header('Content-Type', 'audio/mpeg');
      res.send(audioContent);
    } catch (error) {
      console.error('Error in Text-to-Speech API request:', error);
      res.status(500).send({ success: false, error: 'Text-to-Speech API request failed' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
