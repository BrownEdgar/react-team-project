import React from 'react'
import PropTypes from 'prop-types'



export default function Component(props) {

	return (
		<div>
			<h2>{props.d.compliteds}</h2>
		</div>
	)
}

Component.propTypes = {
	name: PropTypes.string.isRequired,
	data: PropTypes.shape({
		id: PropTypes.number,
		userId: PropTypes.number,
		complited: PropTypes.bool,
	})
}