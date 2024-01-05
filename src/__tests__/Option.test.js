import { render as cmpRender,screen,cleanup } from "@testing-library/react"
import Options from "../Components/Options/Options"
import { Provider } from "react-redux"
import { store } from "../Store/store"

const render = component => cmpRender(
    <Provider store={store}>
        {component}
    </Provider>
)

test('Should contain option', () =>{
    render(<Options />)
    const optionElement = screen.getByTestId('Option')
    expect(optionElement).toBeInTheDocument();
})