import axios from 'axios';
import netConsts from '../netConsts';

const sendPriceListRequest = async () => {
  const url = netConsts.API_BASE_URL + netConsts.API_PRİCELİST; 

  const requestData = {
    header: {
      transactionId: '12345',
      messageId: 1,
      action: 'API_PRİCELİST',
      resource: 'API_PRİCELİST',
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

  try {
    const response = await axios.post(url, requestData);
    console.log('İstek Başarılı:', response.data);
  } catch (error) {
    console.error('İstek Hatası:', error);
  }
};

sendPriceListRequest();
