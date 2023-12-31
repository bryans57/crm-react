import { IClient } from '../models';

interface Props {
	client: IClient;
}

function Client({ client }: Props) {
	const { name, company, phone, email } = client;
	return (
		<tr className='border-b'>
			<td className='p-6 space-y-2'>
				<p className='text-2xl text-gray-800'>{name}</p>
				<p>{company}</p>
			</td>

			<td className='p-6 space-y-2'>
				<p className='text-gray-600'>
					<span className='text-gray-800 uppercase font-bold'>Email: </span>
					{email}
				</p>
				<p className='text-gray-600'>
					<span className='text-gray-800 uppercase font-bold'>Phone: </span>
					{phone}
				</p>
			</td>

			<td className='p-6 flex gap-3'>
				<button
					className='uppercase text-blue-600 hover:text-blue-700 font-bold text-xs'
					type='submit'
				>
					Editar
				</button>
				<button
					className='uppercase text-red-600 hover:text-red-700 font-bold text-xs'
					type='submit'
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
}

export default Client;
