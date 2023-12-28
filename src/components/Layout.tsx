import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
	const location = useLocation();

	const validateActive = (path: string) => {
		return location.pathname === path ? 'text-blue-400' : 'text-white';
	};

	return (
		<div className='md:flex md:min-h-screen'>
			<aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
				<h2 className='text-4xl  font-black  text-center text-white'>
					CRM - Clients
				</h2>
				<nav>
					<Link
						className={`${validateActive(
							'/'
						)} text-2xl block mt-2 hover:text-blue-300`}
						to='/'
					>
						Clients
					</Link>
					<Link
						className={`${validateActive(
							'/clients/new'
						)} text-2xl block mt-2  hover:text-blue-300`}
						to='/clients/new'
					>
						New Client
					</Link>
				</nav>
			</aside>
			<main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
