import prisma from '../../../../prisma/prisma';


const handler = async (req, res) => {
	if (req.method === 'POST') {
		try {
			const secret = req.body;

			const data = await prisma.AppSecret.findUnique({
				where: {
					secret: String(secret)
				}
			});

			console.log(`data from api:`, data);

			if (data) {
				res
					.status(200)
					.json({ success: true, message: 'Congratz! Secret matched' });
			} else {
				res.status(400).json({
					success: false,
					message: 'You are not authorized!'
				});
			}
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	}
};

export default handler;
