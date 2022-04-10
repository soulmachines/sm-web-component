export const enum SpeechRecognizerAudioSource {
  Processed = 2,
  Squelched = 4,
}

export interface StartRecognizeRequest {
  /**
   * Default: SpeechRecognizerAudioSource.Processed
   * tbd - allow specification keywords/context to improve recognition accuracy
   */
  audioSource?: SpeechRecognizerAudioSource;
}
