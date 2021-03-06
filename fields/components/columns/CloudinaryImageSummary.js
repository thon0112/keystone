import React from 'react';
// import CloudinaryImage from 'react-cloudinary-img';
import ItemsTableValue from '../../../admin/client/components/ItemsTableValue';

const IMAGE_SIZE = 18;

const linkStyle = {
	marginRight: 8,
};
const boxStyle = {
	borderRadius: 3,
	display: 'inline-block',
	height: IMAGE_SIZE,
	overflow: 'hidden',
	verticalAlign: 'middle',
	width: IMAGE_SIZE,
};
const imageStyle = {
	display: 'block',
	height: IMAGE_SIZE,
	left: '50%',
	position: 'relative',

	WebkitTransform: 'translateX(-50%)',
	MozTransform:    'translateX(-50%)',
	msTransform:     'translateX(-50%)',
	transform:       'translateX(-50%)',
};
const textStyle = {
	color: '#888',
	display: 'inline-block',
	fontSize: '.8rem',
	marginLeft: 8,
	verticalAlign: 'middle'
};

var CloudinaryImageSummary = React.createClass({
	displayName: 'CloudinaryImageSummary',
	propTypes: {
		label: React.PropTypes.oneOf(['dimensions', 'publicId']),
		image: React.PropTypes.object.isRequired,
	},
	renderLabel () {
		if (!this.props.label) return;

		let { label, image } = this.props;

		let text;
		if (label === 'dimensions') {
			text = `${image.width} × ${image.height}`;
		} else {
			text = `${image.public_id}.${image.format}`;
		}

		return (
			<span style={textStyle}>
				{text}
			</span>
		);
	},
	renderImageThumbnail () {
		if (!this.props.image) return;

		let url = this.props.image.url.replace(/image\/upload/, `image/upload/c_thumb,g_face,h_${IMAGE_SIZE},w_${IMAGE_SIZE}`);

		return <img src={url} style={imageStyle} className="img-load" style={ { height: IMAGE_SIZE } } />;
	},
	render () {
		return (
			<span style={linkStyle}>
				<span style={boxStyle}>
					{this.renderImageThumbnail()}
				</span>
				{this.renderLabel()}
			</span>
		);
	}
});

module.exports = CloudinaryImageSummary;
