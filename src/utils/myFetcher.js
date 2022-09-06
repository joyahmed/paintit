import { BASE_URL } from './config';

// export const fetcher = async (url) =>
// 	await fetch(url).then(res => res.json());

export const getData = async (url, token) => {
	const res = await fetch(`${BASE_URL}/api/${url}`, {
		method: 'GET',
		headers: {
			Authorization: token
		}
	});
	const data = await res.json();
	return data;
};


export const postData = async (url, post, token) => {
	const res = await fetch(`${BASE_URL}/api/${url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(post)
	});

	const data = await res.json();

	return data;
};

export const postSecuredData = async (url, post, authCookie) => {
	const res = await fetch(`${BASE_URL}/api/${url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			cookie: authCookie
		},
		body: JSON.stringify(post)
	});

	const data = await res.json();

	return data;
};

export const putData = async (url, post, token) => {
	const res = await fetch(`${BASE_URL}/api/${url}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(post)
	});

	const data = await res.json();

	return data;
};

export const patchData = async (url, post, token) => {
	const res = await fetch(`${BASE_URL}/api/${url}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(post)
	});

	const data = await res.json();

	return data;
};

export const deleteData = async (url, token) => {
	const res = await fetch(`${BASE_URL}/api/${url}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		}
	});

	const data = await res.json();

	return data;
};
