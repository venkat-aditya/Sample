Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react"),
    Attributes_1 = require("../../Attributes"),
    classNames = require("classnames/bind"),
    css = classNames.bind(require("./GalleryCard.module.scss"));
/**
 * Image background for `GalleryCard`
 *
 * Should usually be marked as `fixed`, otherwise it will have no dimensions
 *
 * @param props Control properties (Defined in `ImageBackgroundProps` interface)
 */
exports.ImageBackground = (props) => {
    let cls = css(
        {
            "background-image-container": true,
            fixed: !!props.fixed,
        },
        props.className
    );
    return React.createElement(
        Attributes_1.Elements.div,
        { className: cls, attr: props.attr.container },
        React.createElement(Attributes_1.Elements.image, {
            className: css("background-image"),
            src: props.src,
            title: props.title,
            alt: props.alt,
            attr: props.attr.image,
        })
    );
};
exports.ImageBackground.defaultProps = {
    src: undefined,
    fixed: true,
    attr: {
        container: {},
    },
};
exports.default = exports.ImageBackground;
