/**
 * Sticky Column Block
 */

//  Import CSS.
import "./style.scss";
import { SVG, Path } from "@wordpress/components";
import { InnerBlocks } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import uuidv4 from "uuid/v4";

registerBlockType("ud/sticky-block", {
	title: __("Sticky Block"),
	icon: (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<Path d="M24 3h-11v-2h11v2zm0 3h-11v2h11v-2zm0 5h-11v2h11v-2zm0 5h-11v2h11v-2zm0 5h-11v2h11v-2zm-13-20h-11v22h11v-22z" />
		</SVG>
	),
	category: "common",
	supports: {
		html: false,
		inserter: false
	},
	attributes: {
		position: {
			type: "string",
			default: "right"
		},
		size: {
			type: "number",
			default: 5
		}
	},
	edit: props => {
		const { className } = props;
		const { position, size } = props.attributes;
		return (
			<div key={uuidv4()} className={className + " ud-sticky-block"}>
				<div>
					<div className={"theiaStickySidebar"}>
						<InnerBlocks />
					</div>
				</div>
			</div>
		);
	},
	save: props => {
		const { size } = props.attributes;
		return (
			<div>
				<div className={"theiaStickySidebar" + " ud-sticky-block"}>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	}
});
