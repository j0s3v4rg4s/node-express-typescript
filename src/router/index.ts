import { Router } from 'express';
const index: Router = Router();

index.get('/', async (req, res, nex) => {
	const info  = await data("my message 3")
	res.send(info);
});

function data(data: string) {
	return new Promise((ok) => {
		setTimeout(() => {
			ok(data);
		}, 500);
	});
}

export default index;
