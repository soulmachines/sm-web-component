const canAutoPlay = {
  audio: jest.fn(() => Promise.resolve({ result: true, error: new Error() })),
};

export default canAutoPlay;
