export type UseLocalStorageResult<T> = [T, (value: T | ((val: T) => T)) => void];
