interface Props {
	cliente: any;
}

const ClientForm = ({ cliente }: Props) => {
	return (
		<>
			<div className='mb-4'>
				<label className='text-gray-800' htmlFor='name'>
					Name:
				</label>
				<input
					id='name'
					type='text'
					className='mt-2 block w-full p-3 bg-gray-50'
					placeholder='Client Name'
					name='name'
				/>
			</div>
			<div className='mb-4'>
				<label className='text-gray-800' htmlFor='company'>
					company:
				</label>
				<input
					id='company'
					type='text'
					className='mt-2 block w-full p-3 bg-gray-50'
					placeholder='Client Company'
					name='company'
				/>
			</div>

			<div className='mb-4'>
				<label className='text-gray-800' htmlFor='email'>
					E-mail:
				</label>
				<input
					id='email'
					type='email'
					className='mt-2 block w-full p-3 bg-gray-50'
					placeholder='Client Email'
					name='email'
				/>
			</div>

			<div className='mb-4'>
				<label className='text-gray-800' htmlFor='phone'>
					Phone:
				</label>
				<input
					id='phone'
					type='tel'
					className='mt-2 block w-full p-3 bg-gray-50'
					placeholder='Client Phone'
					name='phone'
				/>
			</div>

			<div className='mb-4'>
				<label className='text-gray-800' htmlFor='notes'>
					Notes:
				</label>
				<textarea
					id='notes'
					className='mt-2 block w-full p-3 bg-gray-50 h-40 align-self'
					placeholder='Client Notes'
					name='notes'
				/>
			</div>
		</>
	);
};

export default ClientForm;
