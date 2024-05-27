import { SafeAreaView } from 'react-native';
import Profile from '../components/MyPage/Profile';
import Photos from '../components/MyPage/Photos';

export default function MyPages() {
    return (
        <SafeAreaView>
            <Profile/>
            <Photos/>
        </SafeAreaView>
    );
}