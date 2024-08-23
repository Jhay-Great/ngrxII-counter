
import { _counterReducer } from "./counter.reducer";
import { increment, decrement, reset } from "../actions/counter.action";

describe('Counter Reducer', () => {

    it('should increment the state by 1', () => {
        let state = 0;
        let payload = {
            interval: 1,
        }

        state = _counterReducer(state, increment(payload));
        expect(state).toBe(1);

        state = _counterReducer(state, increment(payload));
        expect(state).toBe(2);

        state = _counterReducer(state, increment(payload));
        expect(state).toBe(3);
        
    });
    it('should decrease the state by 1', () => {
        let state = 5;
        let payload = {
            interval: 1,
        }

        state = _counterReducer(state, decrement(payload));
        expect(state).toBe(4);

        state = _counterReducer(state, decrement(payload));
        expect(state).toBe(3);

        state = _counterReducer(state, decrement(payload));
        expect(state).toBe(2);
        
    });
    it('should reset the state to 0', () => {

        expect(_counterReducer(0, reset)).toBe(0);

        expect(_counterReducer(3, reset)).toBe(0);

    });


    
})