import React, { forwardRef } from 'react';
import { Drifting } from './drifting.component';
import './drifting.story.css';
const Background = forwardRef((_, ref) => {
    return React.createElement("div", { ref: ref, className: "background" });
});
const Text = forwardRef(({ text, className }, ref) => {
    return (React.createElement("div", { ref: ref, className: "text-wrapper" },
        React.createElement("h1", { className: className }, text)));
});
const meta = {
    title: 'Drifting',
    component: ({ children }) => React.createElement("div", { className: "wrapper" }, children),
};
export default meta;
export const Simple = {
    args: {
        children: React.createElement(Drifting, { maxMouseRange: 20 }, props => React.createElement(Background, { ...props })),
    },
};
export const WithText = {
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement(Drifting, { maxMouseRange: 20 }, props => React.createElement(Background, { ...props })),
            React.createElement(Drifting, { maxMouseRange: 50, maxOrientationRange: 20, reverse: true }, props => React.createElement(Text, { ...props, text: "Drifting component", className: "title" })))),
    },
};
export const AllInOne = {
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement(Drifting, { maxMouseRange: 15, maxOrientationRange: 15 }, props => React.createElement(Background, { ...props })),
            React.createElement(Drifting, { maxMouseRange: 50, maxOrientationRange: 20, reverse: true }, props => React.createElement(Text, { ...props, text: "Drifting component", className: "title" })),
            React.createElement(Drifting, { maxMouseRange: 70, maxOrientationRange: 30 }, props => React.createElement(Text, { ...props, text: "\uD83D\uDEE9", className: "emoji-1" })),
            React.createElement(Drifting, { maxMouseRange: 100, maxOrientationRange: 40, reverse: true }, props => React.createElement(Text, { ...props, text: "\uD83D\uDE80", className: "emoji-2" })),
            React.createElement(Drifting, { maxMouseRange: 300, maxOrientationRange: 80 }, props => React.createElement(Text, { ...props, text: "\uD83D\uDE9A", className: "emoji-3" })),
            React.createElement(Drifting, { maxMouseRange: 150, maxOrientationRange: 60, reverse: true }, props => React.createElement(Text, { ...props, text: "\u2601\uFE0F", className: "emoji-4" })))),
    },
};
