export type Book = {
	id: number;
	title: string;
	description?: string;
	category?: Category;
	author?: Author;
	price: number;
	quantity: number
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

export type Basket = {
	list: {
		book: Book;
		count: number;
	}[]
	price: number
}

export enum orderStatus {
	New,
	Processing,
	Paid,
	Success
}

export type Order = {
	id: number;
	status: orderStatus;
	orderItems: {
		bookId: number,
		quantity: number
	}[],
	created: Date
}

export type OrderDetailItem = {
	id: number;
	quantity: number;
	book: Book;
}
export type OrderDetail = {
	id: number;
	status: orderStatus;
	orderItems: OrderDetailItem[]
	created: Date
}
