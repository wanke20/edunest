import image from "../notebook.jpeg"
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';

let shoppingItems = [
    { name: "Pencil", description: "Ticonderoga No. 2 Pencil", image: "" },
    { name: "Pen", description: "Staples Ballpoint Pen", image: "" },
    { name: "Paper", description: "W.B. Mason A2 Paper", image: "" },
    { name: "Pencil Case", description: "Staples Black Pencil Case", image: "" },
    { name: "Notebook", description: "5 Star Notebook", image: "" },
    { name: "Calculator", description: "Ti-84 Scientific Caclulator", image: "../casio-calc.jpg" },
    { name: "Folder", description: "5 Star Folder", image: "" },
];

const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 75) / 4;

const App = () => {
    let imageLink = "../casio-calc.jpg";

    const Item = ({ title, description, image }) => {
        // imageLink = image;
        // console.log(imageLink);
        return (
            <button style={styles.item}>
                <Text style={styles.title}>{title}<br /></Text>
                <Text style={styles.normalText}>{description}</Text>
            </button>
        )
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 20,
        },
        item: {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: 8,
            width: boxWidth,
            height: 300,
            // backgroundColor: '#f9c2ff',
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 32,
        },
        normalText: {
            fontSize: 16,
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={shoppingItems}
                renderItem={({ item }) => <Item title={item.name} description={item.description} image={item.image} />}
                keyExtractor={item => item.id}
                numColumns={4}

            />
        </SafeAreaView>
    );
};

export default App;