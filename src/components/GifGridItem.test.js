import React from "react";
import { render, screen } from "@testing-library/react";
import { GifGridItem } from "./GifGridItem";

describe('Testing <GifGridItem/>', () => {
    it('should show component', () => {
        const data = [{
            id: '123',
            title: 'Example title',
            url: 'http://url.com'
        }];
        render(<GifGridItem {...data} />)
        // TODO: Complete based on this
        // https://testing-library.com/docs/react-testing-library/example-intro/
    });
});