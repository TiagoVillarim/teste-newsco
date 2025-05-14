import { FeedCard } from '@/components/Organisms/FeedCard/FeedCard';
import { FeedContentMock } from '@/Mock(API)/Feed';
import { FlatList } from 'react-native';

export const Feed = () => {
    return (
        <FlatList
            data={FeedContentMock}
            renderItem={({ item }) => (
                <FeedCard
                    title={item.title}
                    image={item.image}
                    contentTitle={item.contentTitle}
                    description={item.description}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 16 }}
        />
    );
};