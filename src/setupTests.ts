import { vi } from 'vitest';
import '@testing-library/jest-dom';

// WebSDK requires crypto. Need to add it manually
import { Crypto } from '@peculiar/webcrypto';
window.crypto = new Crypto();

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  })),
});
