import { NavBar } from '@/components/Molecules/NavBar/NavBar';
import Header from '@/components/Sections/Header/Header';
import HomePage from '@/components/Sections/HomePage/HomePage';
import { StatusBar, View } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#0A0D10'} />
      <View style={styles.contentContainer}>
        <Header />
        <HomePage />
      </View>
      <NavBar />
    </View>
  );
}
