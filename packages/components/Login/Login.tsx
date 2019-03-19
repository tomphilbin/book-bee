import { Button, Text, TextInput, View } from 'react-native'
import { LoginProps } from './LoginInterfaces'

export const Login = ({ onLoginPress }: LoginProps) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ fontSize: 20, textAlign: 'center', paddingBottom: 30 }}>
      Welcome to Book Bee
    </Text>
    <Text style={{ textAlign: 'center', paddingBottom: 30 }}>
      Enter your email address below and we'll send you a magic link to log in.
    </Text>
    <TextInput style={{ fontSize: 30, backgroundColor: 'papayawhip' }} />
    <Button title="Log in" onPress={onLoginPress} />
  </View>
)
