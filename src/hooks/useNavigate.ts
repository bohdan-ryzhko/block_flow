import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useNavigate = () => useNavigation<RootStackNavigationProp>();
