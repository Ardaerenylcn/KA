import api_client from '../api_client';
import netConsts from '../netConsts';

export const priceListQuery = async () => {
	const params = {
		header: {
			transactionId: '12345',
			messageId: 0,
			action: 'KA_API_PRİCELİST',
			resource: 'KA_API_PRİCELİST',
			operation: 'READ',
			createdDate: '2023-10-15T14:30:00.000Z',
			callbackUrl: null,
			agentId: null,
			conversationId: null,
			correlationId: null,
		},
		body: {
			language: 'tr',
			dateStart: '2023-10-16T09:00:00.000Z',
			customerGroupCode: null,
			goodsGroupCode: null,
			materialNumber: null,
			materialDescription: null,
			hierachyDescription: null,
		},
	};

	return await api_client.post(netConsts.API_PRİCELİST, params);
};
