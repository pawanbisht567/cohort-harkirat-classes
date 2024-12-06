import './App.css'
function App() {

  return (
    <>
      <div className='flex justify-between'>
        <div className='bg-red-500' style={{ backgroundColor: 'red'}}>Hello</div>
        <div className='bg-yellow-500'>Hello</div>
        <div className='bg-green-500'>Hello</div>
        <div className='bg-blue-900'>Hello</div>
      </div>
      <div className='bg-red-500 md:bg-blue-500'>
        <div>Hello</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {/* We have override the below blue color to red */}
        <div className='text-blue-700'>Hello</div> 
        <div className='bg-red-500'>Hello</div>
        <div className='bg-red-500'>Hello</div>
        <div className='bg-red-500'>Hello</div>
        <div className='bg-red-500'>Hello</div>
      </div>
    </>
  )
}

export default App
