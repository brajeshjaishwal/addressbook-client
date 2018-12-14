import * as actions from '../actions/group'
import globals from '../constants/group'

describe('actions', () => {
    it('should create an action to add a fetchCachedGroupAction', () => {
        const groupid = '00000'
        const expectedAction = {
            type: globals.FetchCachedGroup,
            payload: {groupid}
        }
        expect(actions.fetchCachedGroupAction({groupid})).toEqual(expectedAction)
    })
})