import {orderStatus} from '../types/CommonTypes';

export const getStatusName = (status: orderStatus) => {
	switch (status){
		case orderStatus.New:
			return 'Новый заказ';
		case orderStatus.Processing:
			return 'Заказ подтверждёт';
		case orderStatus.Paid:
			return 'Заказ оплачен';
		case orderStatus.Success:
			return 'Заказ завершён';

	}
}
