export type Book = {
	id: number;
	title: string;
	description?: string;
	category?: Category;
	author?: Author;
	price: number;
}

export type Category = {
	id: number;
	name: string;
	description?: string;
}

export type Author = {
	id: number;
	firstName: string;
	lastName: string;
	bio?: string;
}

export type User = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	address: string;
}
