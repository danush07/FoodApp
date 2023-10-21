import Header from '../components/Header';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          {user && (
            <h1 className="text-5xl font-medium mb-4 pb-6">
              Welcome {user.name}! Order Your Food Here
            </h1>
          )}
        <div className='flex flex-row'>
          
          {user && (
            <Link href="/order">
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-24 py-2.5 text-center mr-2">
                Place Order
              </button>
            </Link>
          )}

          {user && (
            <Link href="/my-order">
              <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center">
                View Your Orders!
              </button>
            </Link>
          )}
          </div>
        </div>

        <div className="flex justify-center items-center">
          {!user && (
            <h2 className="text-4xl font-medium mb-4 pb-6">
              Welcome to Span Foods, Please Login or Register to Order Your Food
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
