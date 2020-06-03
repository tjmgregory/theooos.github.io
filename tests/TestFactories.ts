import { ITimeFactory } from '../src/TimeFactory'

export function makeTimeFactoryMock(): jest.Mocked<ITimeFactory> {
    return {
        now: jest.fn()
    }
}