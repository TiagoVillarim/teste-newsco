import { HeaderButton } from '@/components/Atoms/HeaderButtons/HeaderButtons';
import { Image, View } from 'react-native';
import { styles } from './styles';

export default function Header() {
    return (
        <View style={styles.Container}>
            <Image
                source={require('@/assets/images/Logo-Newsco.png')}
                style={styles.Image}
            />
            <View >
                <HeaderButton />
            </View>
        </View>

    );
}

