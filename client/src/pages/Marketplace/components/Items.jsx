import './components.scss';
import {
    SafeAreaView,
    FlatList,
    Text,
    Dimensions,
} from 'react-native';

let shoppingItems = [
    { name: "Pencil", description: "Ticonderoga No. 2 Pencil", image: "/static/media/notebook-pic.0c6cd8f7ac12bbf563af.jpeg" },
    { name: "Pen", description: "Staples Ballpoint Pen", image: "/static/media/notebook-pic.0c6cd8f7ac12bbf563af.jpeg" },
    { name: "Paper", description: "W.B. Mason A2 Paper", image: "/static/media/notebook.2d57e16420e17d301c31.jpeg" },
    { name: "Pencil Case", description: "Staples Black Pencil Case", image: "/static/media/notebook.2d57e16420e17d301c31.jpeg" },
    { name: "Notebook", description: "5 Star Notebook", image: "/static/media/notebook.2d57e16420e17d301c31.jpeg" },
    { name: "Calculator", description: "Ti-84 Scientific Caclulator", image: "/static/media/notebook.2d57e16420e17d301c31.jpeg" },
    { name: "Folder", description: "5 Star Folder", image: "/static/media/notebook.2d57e16420e17d301c31.jpeg" },
];

const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 75) / 4;
document.documentElement.style.setProperty("--background-width", `${boxWidth}px`);

const App = () => {
    const Item = ({ title, description, image }) => {
        return (
            <div className='items-container'>
                <button className='item'>
                    <img src={image} width={boxWidth - 4} height={boxWidth * 0.67} alt="" />
                    <Text className='title-text'><br />{title}<br /></Text>
                    <Text className='normal-text'>{description}</Text>
                </button>
            </div>
        )
    };

    return (
        <div>
            <SafeAreaView className="items-container">
                <FlatList
                    data={shoppingItems}
                    renderItem={({ item }) => <Item title={item.name} description={item.description} image={item.image} />}
                    keyExtractor={item => item.id}
                    numColumns={4}

                />
            </SafeAreaView>
        </div>
    );
};

export default App;