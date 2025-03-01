import PropTypes from "prop-types";

const ImageItem = ({ url, width, height }) => {
    return (
        <div className={`${width} ${height} rounded-2xl`}>
            <img className="rounded-2xl h-full w-full" src={url} alt="Image of Hero" />
        </div>
    );
};

ImageItem.propTypes = {
    url: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}

export default ImageItem;
