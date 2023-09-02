import { useState } from "react";
import './components.scss';

export default function SearchBar() {
    const [search, setSearch] = useState('');

    const sendRequest = () => {
        console.log(search);
    }

    return (
        <div className="components">
            <h1 className="explore-resources">Explore Resources</h1>
            <div className="search-bar">
                <input type="text" value={search} style={{
                    width: '30%',
                }} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={sendRequest}>Filter</button>
            </div>
        </div>
    )
}