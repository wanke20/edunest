import './components.scss';
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
        return (
            <button className='container'>
                <Text className='title'>{title}<br /></Text>
                <Text className='normal-text'>{description}</Text>
            </button>
        )
    };

    return (
        <SafeAreaView className="items-container">
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