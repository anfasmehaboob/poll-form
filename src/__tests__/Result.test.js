import { render as cmpRender,screen } from "@testing-library/react";
import Result from "../Components/Result/Result";
import { Provider } from "react-redux";
import { store } from "../Store/store";

const render = component => cmpRender(
    <Provider store={store}>
        {component}
    </Provider>
)

test('Should contain Result', () => {
    render(<Result />)
    const resultElement = screen.getByTestId('ResultForm');
    expect(resultElement).toBeInTheDocument();

})