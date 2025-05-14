import { MoreActionsButton } from "@/components/Atoms/MoreActionsButton/MoreActionsButton";
import { PlayJornalAudioButton } from "@/components/Atoms/PlayJornalAudioButton/PlayJornalAudioButton";
import { ReactionButton } from "@/components/Atoms/ReactionButton/ReactionButton";
import { SendButton } from "@/components/Atoms/SendButton/SendButton";
import { TextComponent } from "@/components/Atoms/Text/Text";
import { categoryColors } from "@/globalStyle/theme";
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from "react";
import { Image as RNImage, Text, View } from "react-native";
import { styles } from "./styles";

type FeedCardProps = {
    title: string;
    image: any;
    contentTitle: string;
    description?: string;
};

export const FeedCard = ({ title, image, contentTitle, description }: FeedCardProps) => {
    const [aspectRatio, setAspectRatio] = useState(16 / 9);
    const [isGif, setIsGif] = useState(false);

    useEffect(() => {
        if (typeof image === 'number') {
            const source = RNImage.resolveAssetSource(image);
            setAspectRatio(source.width / source.height);
            setIsGif(source.uri?.endsWith('.gif') ?? false);
        }
    }, [image]);

    return (
        <View style={styles.CardContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={image}
                    style={[styles.image, { aspectRatio }]}
                    contentFit={isGif ? 'contain' : 'cover'}
                    recyclingKey={String(image)}
                    cachePolicy="disk"
                    priority="high"
                />
                <View style={styles.timestampContainer}>
                    <Image
                        source={require('@/assets/Icons/clock.png')}
                        style={styles.clockIcon}
                    />
                    <TextComponent Title="2 horas atrás" color="#fff" fontSize={14} fontWeight={600} />
                </View>
                <View style={styles.ButtonsContainer}>
                    <View style={styles.MoreActionsButtonContainer}>
                        <MoreActionsButton />
                    </View>
                    <View style={styles.PlayJornalAudioButtonContainer}>
                        <PlayJornalAudioButton />
                    </View>
                    <SendButton />
                </View>
                <LinearGradient
                    colors={['transparent', '#11161A']}
                    locations={[0, 0.8]}
                    style={styles.gradient}
                />
            </View>

            <View style={styles.contentContainer}>
                <Text style={[styles.categoryText, { color: categoryColors[title] || '#fff' }]}>{title}</Text>
                <Text style={styles.titleText}>{contentTitle}</Text>
                {description && <Text style={[styles.descriptionText, { borderLeftColor: categoryColors[title] || '#fff' }]}>{description}</Text>}
                <View style={styles.reactionContainer}>
                    <ReactionButton />
                </View>
            </View>
        </View>
    );
};