import { TextComponent } from "@/components/Atoms/Text/Text"
import { categoryColors } from "@/globalStyle/theme"
import { TextStyle, View } from "react-native"
import { styles } from './styles'

type StoriesBottomContentProps = {
    category: string,
    categoryColor?: string,
    categoryFontSize?: number,
    categoryFontWeight?: TextStyle['fontWeight'],
    title: string,
    titleColor: string,
    titleFontSize: number,
    titleFontWeight: TextStyle['fontWeight'],
    description: string,
    descriptionColor: string,
    descriptionFontSize: number,
    descriptionFontWeight: TextStyle['fontWeight']

}

export const StoriesBottomContent = ({
    category,
    categoryColor,
    categoryFontSize,
    categoryFontWeight,
    title,
    titleColor,
    titleFontSize,
    titleFontWeight,
    description,
    descriptionColor,
    descriptionFontSize,
    descriptionFontWeight
}: StoriesBottomContentProps) => {
    return (
        <View>
            <TextComponent
                Title={category}
                color={categoryColor}
                fontSize={categoryFontSize}
                fontWeight={categoryFontWeight}
            />
            <TextComponent
                Title={title}
                color={titleColor}
                fontSize={titleFontSize}
                fontWeight={titleFontWeight}
            />
            <View
                style={[styles.Description, { borderLeftColor: categoryColors[category.split(" • ")[0]] || '#fff' }]}>
                <TextComponent
                    Title={description}
                    color={descriptionColor}
                    fontSize={descriptionFontSize}
                    fontWeight={descriptionFontWeight} />
            </View>
        </View>
    )
}

