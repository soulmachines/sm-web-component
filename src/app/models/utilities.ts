export interface SceneCallbacks {
  onConversationResult: Function;
  onRecognizeResult: Function;
  onUserText: Function;
  onSpeechMarker: Function;
}

export const processConversationResultsOutput = (json: any): string => {
  if (json.body && json.body.status && json.body.status < 0) {
    return null;
  }
  let body = json.body;
  if (body.output && body.output.text) return body.output.text;

  return null;
};

export const processConversationResultsInput = (json: any): string => {
  if (json.body && json.body.status && json.body.status < 0) {
    return null;
  }
  let body = json.body;
  if (body.input && body.input.text) return body.input.text;

  return null;
};

export const processRecognizeResults = (json: any): string => {
  let finalResults;
  if (json.body && json.body.status && json.body.status < 0) {
    return null;
  }
  if (json.body && json.body.results) {
    finalResults = json.body.results.find((x) => x.final);
  }
  if (!finalResults) {
    return '';
  }
  const alts = finalResults.alternatives;
  const maxConfidence = alts.reduce((max, alt) => {
    if (alt.confidence > max) {
      return alt.confidence;
    } else {
      return max;
    }
  }, 0);
  return alts.find((x) => x.confidence === maxConfidence).transcript;
};
