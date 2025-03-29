import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";


export default function NavigateBack() {

     const router = useRouter();

    function routerNavigateBack() {
        router.back();
    } 

    return (
        <Pressable  onPress={()=>routerNavigateBack()} >
            <Text>Navigate Back</Text>
        </Pressable>
    )
}