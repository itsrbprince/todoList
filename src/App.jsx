import { Footer } from './Components/Footer/Footer'
import { Home } from './Components/Home'
import { Navbar } from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='bg-gray-950 overflow-x-hidden'>
        <Navbar />
        <div className='bg-gray-900 min-h-screen pb-9'>
          <Home />
        </div>
        <div >
          <Footer />
        </div>
      </div>



    </>

  )
}

export default App
