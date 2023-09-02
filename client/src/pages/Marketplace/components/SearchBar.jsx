import { useState } from "react";

export default function SearchBar() {
    const [search, setSearch] = useState('');

    const sendRequest = () => {
        console.log(search);
    }

    return (
        <div>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '150px 0 50px 0',
                color: 'black',
            }}>Explore Resources</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <input type="text" value={search} style={{
                    width: '30%',
                }} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={sendRequest}>Filter</button>
            </div>
        </div>
    )
}