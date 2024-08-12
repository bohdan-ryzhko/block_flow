import { useSelector } from 'react-redux';
import { RootState } from '../redux';

export const useReduxStore = (): RootState => ({
  auth: useSelector((state: RootState) => state.auth),
});
