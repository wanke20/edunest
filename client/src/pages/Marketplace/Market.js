import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Items from './components/Items';
import './globals.css';

export default function Home() {
  return (
    <div className='background'>
      <Header />
      <SearchBar />
      <Items />
    </div>
  )
}
