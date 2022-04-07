// jest-dom adds custom jest matchers for asserting on DOM nodes.
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// WebSDK requires crypto. Need to add it manually
import { Crypto } from '@peculiar/webcrypto';
window.crypto = new Crypto();
