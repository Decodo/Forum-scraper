import { ConfigService as NestConfigService } from '@nestjs/config';
import { ConfigService } from './config.service';

describe('ConfigService Decodo Web Data API configuration', () => {
  it('reads the Web Data API key and uses the new endpoint base URL', () => {
    const get = jest.fn((key: string, fallback: string) =>
      key === 'DECODO_API_KEY' ? 'test-web-data-api-key' : fallback,
    );
    const service = new ConfigService({ get } as unknown as NestConfigService);

    expect(service.decodo).toEqual({
      apiKey: 'test-web-data-api-key',
      baseUrl: 'https://data.decodo.com/v1',
    });
    expect(get).toHaveBeenCalledWith('DECODO_API_KEY', '');
  });
});
