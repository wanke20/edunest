import './components.scss';
import {
    SafeAreaView,
    FlatList,
    Dimensions,
} from 'react-native';

let shoppingItems = [
    { name: "Ticonderoga No. 2 Pencil", image: require('../notebook.jpeg') },
    { name: "Staples Ballpoint Pen", image: require('../notebook.jpeg') },
    { name: "W.B. Mason A2 Paper", image: require('../notebook.jpeg') },
    { name: "Staples Black Pencil Case", image: require('../notebook.jpeg') },
    { name: "5 Star Notebook", image: require('../notebook.jpeg') },
    { name: "Ti-84 Scientific Caclulator", image: require('../notebook.jpeg') },
    { name: "5 Star Folder", image: require('../notebook.jpeg') },
];

const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 75) / 4;
document.documentElement.style.setProperty("--background-width", `${boxWidth}px`);

const App = () => {
    const Item = ({ title, image }) => {
        return (
            <div className='components'>
                <button className='item'>
                    <img src={image} width={boxWidth - 4} height={boxWidth * 2 / 3} alt="" />
                    <h1 className="normal-text"><br />{title}<br /></h1>
                </button>
            </div>
        )
    };

    return (
        <SafeAreaView className="components">
            <FlatList
                data={shoppingItems}
                renderItem={({ item }) => <Item title={item.name} image={item.image} />}
                keyExtractor={item => item.id}
                numColumns={4}

            />
        </SafeAreaView>
    );
};

export default App;