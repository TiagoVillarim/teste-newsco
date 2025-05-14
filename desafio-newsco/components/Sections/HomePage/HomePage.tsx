import { CarouselCard } from "@/components/Organisms/CarouselCard/CarouselCard";
import { FeedCard } from "@/components/Organisms/FeedCard/FeedCard";
import { FeedContentMock } from "@/Mock(API)/Feed";
import { FlatList, View } from "react-native";
import FeedButtons from "../FeedButtons/FeedButtons";
import Jornal from "../Jornal/Jornal";
import Stories from "../Stories/Stories";
import { styles } from "./styles";

const combinedData = [
    { id: "header_jornal", type: "header", component: <Jornal /> },
    { id: "header_stories", type: "header", component: <Stories /> },
    { id: "header_feed_buttons", type: "header", component: <FeedButtons /> },
    { id: "carousel_card", type: "carousel" },
    ...FeedContentMock.map((item) => ({ ...item, type: "feedItem" })),
];

export default function HomePage() {
    const renderItem = ({ item }: any) => {
        if (item.type === "header") {
            return (
                <View
                    style={[
                        item.id === "header_jornal" && styles.Jornal,
                        item.id === "header_stories" && styles.Stories,
                        item.id === "header_feed_buttons" && styles.FeedButtons,
                    ]}
                >
                    {item.component}
                </View>
            );
        }

        if (item.type === "carousel") {
            return (
                <View style={{ marginBottom: 20 }}>
                    <CarouselCard />
                </View>
            );
        }

        return (
            <View
                style={{
                    marginBottom: 20,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <FeedCard
                    title={item.title}
                    image={item.image}
                    contentTitle={item.contentTitle}
                    description={item.description}
                />
            </View>
        );
    };

    return (
        <FlatList
            data={combinedData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            keyboardShouldPersistTaps="handled"
        />
    );
}