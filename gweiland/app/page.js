import { Announcement } from '@/components/announcement.jsx'
import { Banner } from '@/components/banner.jsx'
import { Navbar } from '@/components/navbar.jsx'
import { SildeShow } from '@/components/slideshow.jsx'

export default function Home() {
  return (
   <>
   <div className='mainContainer'>
    <Announcement/>
    <Navbar/>
    <Banner/>
    <br />
    <br />
    <SildeShow/>
   </div>
   </>
  )
}
