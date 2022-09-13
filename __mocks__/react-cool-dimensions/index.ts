import { vi } from 'vitest';

const useDimensions = vi.fn(() => ({
  observe: vi.fn(),
}));

export default useDimensions;
