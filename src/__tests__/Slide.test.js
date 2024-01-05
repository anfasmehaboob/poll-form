import { render,screen,cleanup } from "@testing-library/react"
import Slide from "../Components/Slide/Slide"
import { questions } from "../Questions/Questions"

test('Should contain sliders', () =>{
    render(<Slide />)
    const slideElement = screen.getByTestId('sliders')
    expect(slideElement).toBeInTheDocument();
})