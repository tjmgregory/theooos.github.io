import { ITimeFactory } from '../src/TimeFactory'

export function makeTimeFactoryMock(): jest.Mocked<ITimeFactory> {
    return {
        utc: jest.fn()
    }
}