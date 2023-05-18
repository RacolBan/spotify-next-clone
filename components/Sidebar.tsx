import {HomeIcon, HeartIcon, PlusCircleIcon, BuildingLibraryIcon, MagnifyingGlassIcon, RssIcon} from '@heroicons/react/24/outline';
import IconButton from './IconButton';
export default function Sidebar() {
  const Divide = () => {
    return (
      <hr className='border-t-[0.1px] border-gray-800 hover:opacity-80'></hr>
    )
  };
  return (
    <div className="px-2 pt-2 pb-36 border-r border-r-slate-900 text-xs lg:text-sm overflow-y-scroll scroll-hidden h-full">
      <IconButton icon={HomeIcon} label='Home' />
      <IconButton icon={MagnifyingGlassIcon} label='Search' />
      <IconButton icon={BuildingLibraryIcon} label='Your Library' />
      <Divide />
      <IconButton icon={PlusCircleIcon} label='Create Playlist' />
      <IconButton icon={HeartIcon} label='Liked Songs' />
      <IconButton icon={RssIcon} label='Your Eposides' />
      <Divide />
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
      <p className="hover:text-white">playlist</p>
    </div>
  )
}
