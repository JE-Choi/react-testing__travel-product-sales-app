import SummaryPage from '../SummaryPage';
import {render, screen} from '@testing-library/react';
import React from "react";

test('checkbox에 맞게 button이 활성화되는가?', () => {
    render(<SummaryPage/>);
    const checkbox = screen.getByRole('checkbox', {
        name: '주문하려는 것을 확인하셨나요?'
    });
    expect(checkbox.checked).toEqual(false);

    const confirmButton = screen.getByRole('button', {
        name: '주문 확인'
    });

    expect(confirmButton.disabled).toBeTruthy();
})