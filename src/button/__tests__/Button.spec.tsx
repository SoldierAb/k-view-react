import React from 'react'
import { render } from '@testing-library/react'
import Button from '../Button'

describe('Button',  ()=>{
    test('render', ()=>{
        const { container } = render(<Button>primary</Button>)
        expect(container).toMatchSnapshot()
    })
    test('type render correctly', ()=>{
        const types: any[] = ['primary','success','warning','error']
        const { getByText }  = render(
            <>
                {
                    types.map(ty => <Button type={ty} key={ty}>{ty}</Button>)
                }
            </>
        )
        types.forEach(ty => expect(getByText(ty)).toMatchSnapshot())
    })
})