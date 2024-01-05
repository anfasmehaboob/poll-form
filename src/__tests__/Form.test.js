import { render as cmpRender, screen } from "@testing-library/react";
import Form from "../Components/Forms/Form"
import { Provider } from "react-redux";
import { store } from "../Store/store";

const render = component => cmpRender(
    <Provider store={store}>
        {component}
    </Provider>
)


test('Should contain Form', () => {
    render(<Form />)
    const formElement = screen.getByTestId('Form');
    expect(formElement).toBeInTheDocument();

})