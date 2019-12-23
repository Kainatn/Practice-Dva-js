export default {

    namespace: 'count',
    state: 0,
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    reducers: {
        add(count) { return count + 1 },
        minus(count) { return count - 1 },
    }

}