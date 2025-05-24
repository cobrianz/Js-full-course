from gtts import gTTS
import os

# Path to your text file
text_file = "input.txt"

# Read text from file
try:
    with open(text_file, 'r', encoding='utf-8') as file:
        text = file.read().strip()
    if not text:
        raise ValueError("Text file is empty")
except FileNotFoundError:
    print(f"Error: File {text_file} not found")
    exit(1)
except Exception as e:
    print(f"Error reading file: {str(e)}")
    exit(1)

# Output MP3 file path
mp3_path = "output.mp3"

# Convert text to speech and save as MP3
try:
    tts = gTTS(text=text, lang='en')
    tts.save(mp3_path)
    print(f"Successfully converted to MP3: {mp3_path}")
except Exception as e:
    print(f"Error during TTS or MP3 conversion: {str(e)}")