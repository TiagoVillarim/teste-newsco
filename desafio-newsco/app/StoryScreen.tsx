import { StoryContent } from "@/components/Sections/StoryContent/StoryContent";
import { StoryProvider } from "@/context/StoryContext";
import { StoriesMock } from "@/Mock(API)/stories";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function StoryView() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const initialIndex = StoriesMock.findIndex((s) => s.id === Number(id));

    return (
        <StoryProvider
            stories={StoriesMock}
            initialIndex={initialIndex}
            onClose={() => router.back()}
        >
            <StoryContent />
        </StoryProvider>
    );
}