import { useLoaderData } from 'react-router-dom';
import { IClient } from '../models';
import Client from '../components/Client';

export function loader() {
	const clients: IClient[] = [
		{
			id: 1,
			name: 'Juan',
			phone: 103593458,
			email: 'juan@email.com',
			company: 'Google',
		},
		{
			id: 2,
			name: 'Pedro',
			phone: 203493452,
			email: 'pedro@email.com',
			company: 'Facebook',
		},
		{
			id: 3,
			name: 'Maria',
			phone: 303553453,
			email: 'maria@email.com',
			company: 'Amazon',
		},
		{
			id: 4,
			name: 'Jose',
			phone: 403593454,
			email: 'jose@email.com',
			company: 'Apple',
		},
		{
			id: 5,
			name: 'Luis',
			phone: 503593455,
			email: 'luis@email.com',
			company: 'Microsoft',
		},
	];
	return clients;
}

function Home() {
	const clients = useLoaderData() as IClient[];

	return (
		<>
			<h1 className=' font-black text-4xl text-blue-900'>Clients</h1>
			<p className=' mt-3'>Manage your clients</p>

			{clients.length > 0 ? (
				<table className='w-full bg-white shadow mt-5 table-auto'>
					<thead className=' bg-blue-800 text-white'>
						<tr>
							<th className='p-2'>Name</th>
							<th className='p-2'>Company</th>
							<th className='p-2'>Phone</th>
						</tr>
					</thead>

					<tbody>
						{clients.map((client: IClient) => (
							<Client client={client} key={client.id} />
						))}
					</tbody>
				</table>
			) : (
				<p className='mt-5 text-center text-2xl'>There are no clients</p>
			)}
		</>
	);
}

export default Home;
