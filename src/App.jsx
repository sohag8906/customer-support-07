
import './App.css'

function App() {
  

  return (
    
    <>
    <div className=' bg-white shadow-sm'>
    <div className=" max-w-[1200px] mx-auto navbar ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
  </div>
  
  <div className="navbar-end    gap-4  ">
    
        <ul className="menu menu-horizontal font-medium px-1 hidden lg:flex    ">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
        
      </div>

    <a className="btn text-white rounded-md bg-[#422AD5]"> <img src="/images/v+ (1).png" alt="" /> New Ticket</a>
  

 </div>
</div>

  
    </>
  );
}
export default App
