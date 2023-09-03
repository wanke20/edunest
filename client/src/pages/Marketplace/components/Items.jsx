import { redirect } from 'react-router-dom';
import {
    SafeAreaView,
    FlatList,
    Dimensions,
} from 'react-native';
import './components.scss';

let shoppingItems = [
    { name: "Ticonderoga No. 2 Pencil", tags: ['pencil'], image: require('../pictures/casio-calc.jpg') },
    { name: "Staples Ballpoint Pen", tags: ['pen', 'staples'], image: require('../pictures/notebook.jpeg') },
    { name: "W.B. Mason A2 Paper", tags: ['paper'], image: require('../pictures/notebook.jpeg') },
    { name: "Staples Black Pencil Case", tags: ['case', 'pencil', 'staples'], image: require('../pictures/notebook.jpeg') },
    { name: "5 Star Notebook", tags: ['notebook', '5 star'], image: require('../pictures/notebook.jpeg') },
    { name: "Ti-84 Scientific Caclulator", tags: ['calculator', 'scientific'], image: require('../pictures/notebook.jpeg') },
    { name: "5 Star Folder", tags: ['folder', '5 star'], image: require('../pictures/notebook-pic.jpeg') },
];

const screenWidth = Dimensions.get('window').width;
const boxWidth = (screenWidth - 75) / 4;
const root = document.documentElement;
root?.style.setProperty("--background-width", `${boxWidth}px`);
root?.style.setProperty("--image-width", `${boxWidth - 4}px`);
root?.style.setProperty("--image-height", `${boxWidth * 2 / 3}px`);

const App = () => {
    const handleRedirect = (title) => {
        const result = title.replace(/ /g, "-");
        console.log(`/market/${result}`);
        return redirect(`/market/${result}`);
    }

    const Item = ({ title, image }) => (
        <div className='components'>
            <button className='item' onClick={() => handleRedirect(title)}>
                <img src={image} alt="" />
                <h1 className="normal-text"><br />{title}<br /></h1>
            </button>
        </div>
    );

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