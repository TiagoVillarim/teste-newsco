import { TextComponent } from "@/components/Atoms/Text/Text"
import { StoriesMock } from "@/Mock(API)/stories"
import { Link } from "expo-router"
import { Image, ScrollView, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export default function Stories() {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.storyItem}>
                    <TouchableOpacity style={styles.AddStoryButton}>
                        <Image
                            source={require('@/assets/Icons/PlusIcon.png')}
                            style={styles.PlusIcon}
                        />
                    </TouchableOpacity>
                    <TextComponent Title='Adicionar' fontSize={13} fontWeight='500' color='#C3C3C3' />
                </View>
                {StoriesMock.map((story) => (
                    <Link
                        href={{
                            pathname: "/StoryScreen",
                            params: { id: story.id }
                        }}
                        key={story.id}
                        asChild
                    >
                        <TouchableOpacity style={styles.storyItem}>
                            <View style={styles.storyCircle}>
                                <Image
                                    source={story.image}
                                    style={styles.storyImage}
                                    resizeMode="cover"
                                />
                            </View>
                            <TextComponent Title={story.title} fontSize={13} fontWeight='600' />
                        </TouchableOpacity>
                    </Link>
                ))}
            </ScrollView>
        </View>
    )
}
