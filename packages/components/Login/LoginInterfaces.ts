import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native'

export interface LoginProps {
  onLoginPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}
