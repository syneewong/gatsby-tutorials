import React from "react"
import Link from "gatsby-link"

export default () =>
	<div style={{ color: `tomato`}}>
		<h1>Hello this is my second page!</h1>
		<p>What a world!</p>
		<img src="http://lorempixel.com/400/200/" />
		<br />
		<Link to="/">back home</Link>
	</div>
