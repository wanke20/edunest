import SearchBar from './components/SearchBar'
import Items from './components/Items';
import './globals.scss';

export default function Home() {
  return (
    <div className='background'>
      <h1 className="text-over-image">This is the Academiax Marketplace</h1>
      <SearchBar />
      <Items />
    </div>
  )
}
