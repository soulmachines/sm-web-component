import { renderHook } from '@testing-library/preact';
import { usePrevious } from './usePrevious';

describe('usePrevious()', () => {
  it('returns the initial value', () => {
    const { result } = renderHook(() => usePrevious(10));
    expect(result.current).toEqual(10);
  });

  it('returns the previous value when the value changes', () => {
    const { result, rerender } = renderHook((value = 'one') => usePrevious(value));
    expect(result.current).toEqual('one');

    rerender('two');
    expect(result.current).toEqual('one');

    rerender('three');
    expect(result.current).toEqual('two');

    rerender('four');
    expect(result.current).toEqual('three');
  });
});
