const getBands = async () => {
	const res = await fetch(
		'https://next-api-three-omega.vercel.app/api/bands',
		{
			next: {
				revalidate: 30,
			},
		}
	)
	return res.json()
}



export default async function page({ params }) {
	console.log(params.name.replaceAll('%20', ' '))
	const bands = await getBands()
	// console.log(bands)
	const band = bands.filter(
		el =>
			el.name.toLowerCase() === params.name.replaceAll('%20', ' ').toLowerCase()
	)

console.log(band)
	
	return (
		<div>
			{band.length ? (
				<h1>{band[0].name}</h1>
			) : (
				<h2>Not such band in the database</h2>
			)}
			{band.length ? (
				<>
					<h2>Discography:</h2>
					<ul>
						{band[0].discography.map(el => (
							<li key={el}>{el}</li>
						))}
					</ul>
				</>
			) : null}
		</div>
	)

}
