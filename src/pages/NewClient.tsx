import { Form, useNavigate } from 'react-router-dom';
import { Pages } from '../constants';
import ClientForm from '../components/ClientForm';

function NewClient() {
	const navigate = useNavigate();
	return (
		<>
			<div className='flex justify-between mb-4'>
				<div>
					<h2 className=' font-black text-4xl text-blue-900'>New Client</h2>
					<p className='mt-3'> Fill all the fields to add a new client</p>
				</div>
				<div className='self-center'>
					<button
						className='px-3 py-1 bg-blue-800 text-white font-bold uppercase'
						onClick={() => navigate(Pages.LastPage)}
					>
						Volver
					</button>
				</div>
			</div>
			<div className='bg-white px-5 py-10 mx-auto md:w-3/4 shadow rounded-md'>
				<ClientForm />
			</div>
		</>
	);
}

export default NewClient;
